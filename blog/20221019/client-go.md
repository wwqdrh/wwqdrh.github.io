===tag=API
===description=kubernetes的go语言客户端库
===pinned=false

操作集群的核心client

k8s.io/client-go 提供了对k8s原生资源的informer和clientset等等，但对于自定义资源的操作则相对低效，需要使用 rest api 和 dynamic client 来操作，并自己实现反序列化等功能。

## tools：工具

### tools/clientcmd
 
`clientcmd.BuildConfigFromFlags(masterUrl, kubeconfigPath string)`: 根据配置~/.kube/config等或者其他位置的k8s集群config构造config对象


### tools/cache

可以用于监听资源的变化

`cache.NewListWatchFromClient`

```go
// create the pod watcher
podListWatcher := cache.NewListWatchFromClient(clientset.CoreV1().RESTClient(), "pods", v1.NamespaceDefault, fields.Everything())
```

cache.NewIndexerInformer

使用上方创建的监听对象，并且可以传入cache.ResourceEventHandlerFuncs结构体(包含各个事件下的资源创建)

```go
indexer, informer := cache.NewIndexerInformer(podListWatcher, &v1.Pod{}, 0, cache.ResourceEventHandlerFuncs{
    AddFunc: func(obj interface{}) {
        key, err := cache.MetaNamespaceKeyFunc(obj)
        if err == nil {
            queue.Add(key)
        }
    },
    UpdateFunc: func(old interface{}, new interface{}) {
        key, err := cache.MetaNamespaceKeyFunc(new)
        if err == nil {
            queue.Add(key)
        }
    },
    DeleteFunc: func(obj interface{}) {
        // IndexerInformer uses a delta queue, therefore for deletes we have to use this
        // key function.
        key, err := cache.DeletionHandlingMetaNamespaceKeyFunc(obj)
        if err == nil {
            queue.Add(key)
        }
    },
}, cache.Indexers{})
```

cache.Indexer

cache.WaitForCacheSync

cache.Indexer
	- GetByKey: 根据传入的key获取资源对象
	

cache.Controller

### tools/leaderelection/resourcelock

资源锁

```go
// we use the Lease lock type since edits to Leases are less common
// and fewer objects in the cluster watch "all Leases".
lock := &resourcelock.LeaseLock{
    LeaseMeta: metav1.ObjectMeta{
        Name:      leaseLockName,
        Namespace: leaseLockNamespace,
    },
    Client: client.CoordinationV1(),
    LockConfig: resourcelock.ResourceLockConfig{
        Identity: id,
    },
}


// start the leader election code loop
leaderelection.RunOrDie(ctx, leaderelection.LeaderElectionConfig{
    Lock: lock,
    // IMPORTANT: you MUST ensure that any code you have that
    // is protected by the lease must terminate **before**
    // you call cancel. Otherwise, you could have a background
    // loop still running and another process could
    // get elected before your background loop finished, violating
    // the stated goal of the lease.
    ReleaseOnCancel: true,
    LeaseDuration:   60 * time.Second,
    RenewDeadline:   15 * time.Second,
    RetryPeriod:     5 * time.Second,
    Callbacks: leaderelection.LeaderCallbacks{
        OnStartedLeading: func(ctx context.Context) {
            // we're notified when we start - this is where you would
            // usually put your code
            run(ctx)
        },
        OnStoppedLeading: func() {
            // we can do cleanup here
            klog.Infof("leader lost: %s", id)
            os.Exit(0)
        },
        OnNewLeader: func(identity string) {
            // we're notified when new leader elected
            if identity == id {
                // I just got the lock
                return
            }
            klog.Infof("new leader elected: %s", identity)
        },
    },
})
```

## util

util/homedir

Homedir.HomeDir(): 跨平台，返回home目录


util/retry

Retry.RetryOnConflict(backoff wait.Backoff, fn func() error) error: 当传入的函数发生错误的时候会进行重试


util/workqueue

workqueue.NewRateLimitingQueue: 带有资源限制的队列

`queue := workqueue.NewRateLimitingQueue(workqueue.DefaultControllerRateLimiter())`

- Get  获取资源对象，会返回key以及是否已经关闭的标识
- Done  传入key，表示这个资源执行完了
- Forget 传入key
- NumRequeues 传入key 获取对应对象的重新放入队列中的次数
- AddRateLimited 将key对应的对象重新加入队列中，

## rest

与k8s集群通过restapi接口进行交互


## kubernetes

Kubernetes.NewForConfig(c *rest.Config) (*Clientset, error): 传入config对象，获取操作k8s的client

- NewForConfig
- NewForConfigOrDie

`deploymentsClient := Clientset.AppsV1().Deployments(apiv1.NamespaceDefault)` // 使用apps/v1接口，返回使用default命名空间的deployment接口

`Result, err := deploymentsClient.Create(context.TODO(), [k8s.io/api/v1.Deployment描述的deployment对象], metav1.CreateOpstions{})`


- Create: 创建deployment
- Delete: 创建deployment
- CoreV1: 核心对象交互
    ○ Pods: 返回指定pod 
        § List（clientset.CoreV1().Pods("").List(context.TODO(),metav1.ListOptions{})）
        § Get (clientset.CoreV1().Pods("default").Get(context.TODO(), "example-xxxxx",metav1.GetOptions{}))

`Result.GetObjectMeta().GetName()` // 获取创建结果，这里是获取deployment的名字

### kubernetes/fake

模拟操作，其实并没有真的k8s集群

// Create the fake client.
client := fake.NewSimpleClientset()

```go
func TestFakeClient(t *testing.T) {
    ctx, cancel := context.WithCancel(context.Background())
    defer cancel()
    watcherStarted := make(chan struct{})
    // Create the fake client.
    client := fake.NewSimpleClientset()
    // A catch-all watch reactor that allows us to inject the watcherStarted channel.
    client.PrependWatchReactor("*", func(action clienttesting.Action) (handled bool, ret watch.Interface, err error) {
        gvr := action.GetResource()
        ns := action.GetNamespace()
        watch, err := client.Tracker().Watch(gvr, ns)
        if err != nil {
            return false, nil, err
        }
        close(watcherStarted)
        return true, watch, nil
    })
    // We will create an informer that writes added pods to a channel.
    pods := make(chan *v1.Pod, 1)
    informers := informers.NewSharedInformerFactory(client, 0)
    podInformer := informers.Core().V1().Pods().Informer()
    podInformer.AddEventHandler(&cache.ResourceEventHandlerFuncs{
        AddFunc: func(obj interface{}) {
            pod := obj.(*v1.Pod)
            t.Logf("pod added: %s/%s", pod.Namespace, pod.Name)
            pods <- pod
        },
    })
    // Make sure informers are running.
    informers.Start(ctx.Done())
    // This is not required in tests, but it serves as a proof-of-concept by
    // ensuring that the informer goroutine have warmed up and called List before
    // we send any events to it.
    cache.WaitForCacheSync(ctx.Done(), podInformer.HasSynced)
    // The fake client doesn't support resource version. Any writes to the client
    // after the informer's initial LIST and before the informer establishing the
    // watcher will be missed by the informer. Therefore we wait until the watcher
    // starts.
    // Note that the fake client isn't designed to work with informer. It
    // doesn't support resource version. It's encouraged to use a real client
    // in an integration/E2E test if you need to test complex behavior with
    // informer/controllers.
    <-watcherStarted
    // Inject an event into the fake client.
    p := &v1.Pod{ObjectMeta: metav1.ObjectMeta{Name: "my-pod"}}
    _, err := client.CoreV1().Pods("test-ns").Create(context.TODO(), p, metav1.CreateOptions{})
    if err != nil {
        t.Fatalf("error injecting pod add: %v", err)
    }
    select {
    case pod := <-pods:
        t.Logf("Got pod from channel: %s/%s", pod.Namespace, pod.Name)
    case <-time.After(wait.ForeverTestTimeout):
        t.Error("Informer did not get the added pod")
    }
}
```

## dynamic

Dynamic.NewForConfig(inConfig *rest.Config) (Interface, error): 返回client对象，与上面的kubernetes.NewForConfig对象类似，不过只会返回一个具有Resource方法的interface，一般用来管理资源

`result, err := client.Resource(deploymentRes).Namespace(namespace).Create(context.TODO(), deployment, metav1.CreateOptions{})`

返回的resource包含的方法

```go
type ResourceInterface interface {
    Create(ctx context.Context, obj *unstructured.Unstructured, options metav1.CreateOptions, subresources ...string) (*unstructured.Unstructured, error)
    Update(ctx context.Context, obj *unstructured.Unstructured, options metav1.UpdateOptions, subresources ...string) (*unstructured.Unstructured, error)
    UpdateStatus(ctx context.Context, obj *unstructured.Unstructured, options metav1.UpdateOptions) (*unstructured.Unstructured, error)
    Delete(ctx context.Context, name string, options metav1.DeleteOptions, subresources ...string) error
    DeleteCollection(ctx context.Context, options metav1.DeleteOptions, listOptions metav1.ListOptions) error
    Get(ctx context.Context, name string, options metav1.GetOptions, subresources ...string) (*unstructured.Unstructured, error)
    List(ctx context.Context, opts metav1.ListOptions) (*unstructured.UnstructuredList, error)
    Watch(ctx context.Context, opts metav1.ListOptions) (watch.Interface, error)
    Patch(ctx context.Context, name string, pt types.PatchType, data []byte, options metav1.PatchOptions, subresources ...string) (*unstructured.Unstructured, error)
}

type NamespaceableResourceInterface interface {
    Namespace(string) ResourceInterface
    ResourceInterface
}
```

## k8s.io/api

用于描述k8s集群中的资源。

官方提供了多种多样的的 API 资源类型，它们被定义在 k8s.io/api 这个仓库中，作为 kubernetes API 定义的规范地址。实际上，最开始这个仓库只是 kubernetes 核心仓库的一部分，后来 kubernetes API 定义规范被越来越多的其他仓库使用，例如 k8s.io/client-go、k8s.io/apimachinery、k8s.io/apiserver 等，为了避免交叉依赖，所以才把 api 拿出来作为单独的仓库。

### appsV1 apps/v1

Appsv1.Deployment: 声明deployment资源对象的结构体


```go
type Deployment struct {
    metav1.TypeMeta `json:",inline"`
    
    metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

    Spec DeploymentSpec `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`

    Status DeploymentStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// 示例
deployment := &appsv1.Deployment{
    ObjectMeta: metav1.ObjectMeta{
        Name: "demo-deployment",
    },
    Spec: appsv1.DeploymentSpec{
        Replicas: int32Ptr(2),
        Selector: &metav1.LabelSelector{
            MatchLabels: map[string]string{
                "app": "demo",
            },
        },
        Template: apiv1.PodTemplateSpec{
            ObjectMeta: metav1.ObjectMeta{
                Labels: map[string]string{
                    "app": "demo",
                },
            },
            Spec: apiv1.PodSpec{
                Containers: []apiv1.Container{
                    {
                        Name:  "web",
                        Image: "nginx:1.12",
                        Ports: []apiv1.ContainerPort{
                            {
                                Name:          "http",
                                Protocol:      apiv1.ProtocolTCP,
                                ContainerPort: 80,
                            },
                        },
                    },
                },
            },
        },
    },
}
```

## K8s.io/apimachinery

用于描述k8s资源的


pkg/util/runtime



runtime.HandleError(err) 处理异常任务


defer runtime.HandleCrash() 用于捕获异常任务



/pkg/util/wait


Wait.Until


pkg/apis/meta/v1

metav1.DeletePropagationForeground

metav1.ListOptions：描述资源的结构体，一般在deploymentsClient.List中进行使用

metav1.CreateOptions{}: 创建资源


pkg/runtime/schema

deploymentRes := schema.GroupVersionResource{Group: "apps", Version: "v1", Resource: "deployments"}

定义资源类型，这里定义为group分组为apps，资源类型为deployments


apis/meta/v1/unstructured

也可以用来定义具体的deployment，跟k8s.io/api/v1.Deployment同一个作用，不过这个通过map[string]interface{}的形式，而appsv1.deployment是结构体

```go
deployment := &unstructured.Unstructured{
    Object: map[string]interface{}{
        "apiVersion": "apps/v1",
        "kind":       "Deployment",
        "metadata": map[string]interface{}{
            "name": "demo-deployment",
        },
        "spec": map[string]interface{}{
            "replicas": 2,
            "selector": map[string]interface{}{
                "matchLabels": map[string]interface{}{
                    "app": "demo",
                },
            },
            "template": map[string]interface{}{
                "metadata": map[string]interface{}{
                    "labels": map[string]interface{}{
                        "app": "demo",
                    },
                },
                "spec": map[string]interface{}{
                    "containers": []map[string]interface{}{
                        {
                            "name":  "web",
                            "image": "nginx:1.12",
                            "ports": []map[string]interface{}{
                                {
                                    "name":          "http",
                                    "protocol":      "TCP",
                                    "containerPort": 80,
                                },
                            },
                        },
                    },
                },
            },
        },
    },
}
```

也可以用来设置新的字段

- unstructured.SetNestedField
- unstructured.NestedSlice
- unstructured.NestedInt64

```go
// extract spec containers
containers, found, err := unstructured.NestedSlice(result.Object, "spec", "template", "spec", "containers")
if err != nil || !found || containers == nil {
    panic(fmt.Errorf("deployment containers not found or error in spec: %v", err))
}
// update container[0] image
if err := unstructured.SetNestedField(containers[0].(map[string]interface{}), "nginx:1.13", "image"); err != nil {
    panic(err)
}
if err := unstructured.SetNestedField(result.Object, containers, "spec", "template", "spec", "containers"); err != nil {
    panic(err)
}
```