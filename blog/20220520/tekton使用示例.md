===tag=云原生
===description=tekton作为云原生中的cd工具，能够轻易的做到task复用，减少重复代码编写

## 简介

基于声明式API的流水线, Tekton组件目录(Tekton Catalog)是一个社区驱动的Tekton组件的存储仓库, 任何用户可直接获取并基于此构建复杂流水线， 而无需开发

- 自定义
- 可重用
- 可扩展性
- 标准化
- 规模化支持

tekton可以完成CICD的所有工作，也可以接入argocd，让tekton专注于CI，CD则交给ArgoCD

### 安装

tekton的组件包括dashboard、tkn(cli)、trigger、interceptors

``` Shell
# dashboard
kubectl apply --filename https://github.com/tektoncd/dashboard/releases/latest/download/tekton-dashboard-release.yaml

# tkn
# 需要在github中下载release
wget https://github.com/tektoncd/cli/releases/download/v0.23.1/tkn_0.23.1_Linux_x86_64.tar.gz

tar -zxvf tkn_0.23.1_Linux_x86_64.tar.gz

mv … /usr/local/bin/tkn # 移动到指定的bin目录下

# trigger
kubectl apply -f https://storage.googleapis.com/tekton-releases/triggers/previous/v0.13.0/release.yaml 

kubectl apply -f https://storage.googleapis.com/tekton-releases/triggers/previous/v0.13.0/interceptors.yaml 
```

配置用户角色

``` Shell
kubectl apply -f https://raw.githubusercontent.com/arthurk/tekton-triggers-example/master/01-rbac.yaml
```

## 核心资源对象

### 流水线

<img src="./%E6%B5%81%E6%B0%B4%E7%BA%BF.png" />

- Task：Tekton中的最小单元，代表一个任务模板，包括多个步骤。每一个操作定义为Task中的一个step
- Pipeline：多个 Task 组成的有向无环图，定义了流水线的模板
- PipelineRun：Pipeline 真正执行时需要定义一个PipelineRun，作为流水线的实例，生成一条流水线记录
- TaskRun：Task 真正执行的实例，记录任务状态。一个TaskRun 会创建一个对应的 Pod，每个 step 对应 pod 中的一个 container
- PipelineResource（beta1版本后不再使用）：流水线执行过程中需要的资源信息

### 事件监听

<img src="./%E4%BA%8B%E4%BB%B6%E8%A7%A6%E5%8F%91.png" />

- EventListener：监听器，提供http接口外部事件入口 ，以便于外部事件推送，比如配置Gitlab的Webhook。
- Trigger：指定当EventListener检测到事件发生时会发生什么，它会定义TriggerBinding、TriggerTemplate以及可选的Interceptor。
- TriggerTemplate：用于模板化资源，根据传入的参数实例化Tekton对象资源，比如TaskRun、PipelineRun等。
- TriggerBinding：用于捕获事件中的字段并将其存储为参数，然后会将参数传递给TriggerTemplate。
- ClusterTriggerBinding：和TriggerBinding相似，用于提取事件字段，不过它是集群级别的对象。
- Interceptor：拦截器，在TriggerBinding之前运行，用于负载过滤、验证、转换等处理，只有通过拦截器的数据才会传递给TriggerBinding。

## 使用示例

### 纯tekton

可以编写task，直接使用taskrun运行；或者使用template编排多个task, 定义了pipeline之后再定义pipelinerun进行执行

``` yaml
---task
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: hello
  namespace: tekton-test
spec:
  steps:
    - name: hello
      image: ubuntu
      command:
        - echo
      args:
        - "Hello World!"


---taskrun
apiVersion: tekton.dev/v1beta1
kind: TaskRun
metadata:
  namespace: tekton-test
  name: hello-task-run
spec:
  taskRef:
    name: hello

---pipeline
apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:
  name: hello-goodbye
  namespace: tekton-test
spec:
  tasks:
    - name: hello
      taskRef:
        name: hello
    - name: goodbye
      runAfter:
        - hello
      taskRef:
        name: goodbye

----pipelinerun
apiVersion: tekton.dev/v1beta1
kind: PipelineRun
metadata:
  name: hello-goodbye-run
  namespace: tekton-test
spec:
  pipelineRef:
    name: hello-goodbye

```

### tekton+argocd

<img src="./tekton%2Bargocd.png" />

- 新建应用编排配置仓库
- argocd监控配置仓库
- 使用tekton构建工作流
- 构建镜像，推送至镜像仓库，修改配置仓库
- argocd监听到配置仓库更改，开始应用部署的流程

