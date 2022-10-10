kubernetes的设计原理，阐述其设计背后的生产系统问题。

kubernetes作为开放式平台，具有对不同类型的应用（有状态应用或无状态应用，在线服务或离线任务）进行统一管控的能力。

如何构建高可用的多租户集群，如何确保集群的稳定性和高性能。

相比于虚拟化技术，容器技术更轻量、优雅，也更符合微服务时代应用的构建与部署需求。

kubernetes可以看做一个云计算控制平面的框架，而云计算三要素-计算、网络、存储均以插件形式与kubernetes集成。这样做的好处是，使用者可以选择自己的插件实现来落地。

在容器技术基础上，kubernetes还做了模型抽象，以规范后的模型作为统一的API，kubernetes打破了集群管理者和应用开发者的边界。用统一的语言将不同角色进行关联，通过特定的语义来实现平台层和应用层的协商。

kubernetes扩展性很强，基于自定义模型，形成了丰富的生态圈，例如辅助应用构建的Helm、服务网格解决方案Istio、尝试走标准化之路的开放应用模型(OAM)

>物理机部署 =》虚拟机部署 =》容器部署 

## 云计算

云计算，可以说是虚拟化的伴生技术。将成千上万的计算节点组成一个集群，统一管控，对计算、存储、和网络等计算机系统资源进行抽象，使得云用户无须关心基础架构，只需定义自己需要的计算资源，云平台可以自动选择最合适的计算资源，并分配给用户以满足业务需求。

例如OpenStack就是基于虚拟化的云平台。

## 架构基础

容器技术的优势

kubernetes对象设计的原则

kubernetes控制平面组件的协同工作原理

控制面板组件介绍

## 容器技术

> 如何将应用进程限制在独立的运行环境中，以满足封装和隔离的要求

最开始由Docker作为先驱，引入了容器镜像的概念，将应用、应用的全部依赖、甚至操作系统打包存储和分发，彻底解决了软件交付的方式，简化了应用部署的复杂性。

- 容器的运行基于进程而非虚拟机，无需模拟操作系统。特点是启动速度快、占用资源少
- 基于Namespace隔离进程，可以使用户进程拥有独立的网络配置、文件系统、用户空间、进程空间等等
- 基于Control Group技术，对用户进程进行资源限定，可以为每一个容器实例分配CPU、Memory、磁盘IO等资源上限，能够隔离同一主机上多个用户进程彼此之间的干扰。
- 容器支持分层的文件结构，例如Dockerfile中的每一行命令都是一个文件层级。在运行时也是按照容器分层逐层加载。另外每层都有基于内容计算出来的Digest，如果未发生变化则无需重新拉取，只要基础镜像不更新，则更新镜像版本时都只需要拉取变更的部分，不会过多消耗带宽。

### OCI标准

OCI 标准包含两个协议：镜像标准（Image Spec）和运行时标准（Runtime Spec）。这两个标准通过 OCI 运行时文件系统包（OCI runtime filesytem bundle）的标准格式连接在一起，OCI 镜像可以通过工具转换成文件系统包，OCI Runtime 能够识别该文件系统包并运行容器。

<img src="./img/oci标准.png" />

镜像标准，它规范了以层（Layer）保存的文件系统，每个层保存了和上层之间的变化，如何用manifest、config 和index 文件找出镜像的具体信息，比如文件系统的层级信息（每个层级的哈希值及历史信息），以及容器运行时需要的一些信息（比如环境变量、工作目录、命令参数、挂载列表等）。

运行时标准，顾名思义是运行容器的规范，定义了容器的创建、删除、查看等操作，规范了容器的状态描述（比如容器ID、进程号、运行状态等）等。runC 就是OCI 运行时标准的一个参考实现。runC 直接与容器所依赖的CGroup、Linux Kernel 等进行交互，负责为容器配置CGroup、Namespace 等启动容器所需的环境，创建启动容器的相关进程。

**kata**

容器之所以流行的主要原因是：轻量、性能好，并且易于集成。但是传统的容器体系结构中所有容器及主机操作系统之间共享内核，如果一个容器藏着什么坏心思，主机和其他容器就变得岌岌可危。

> 与gVisor的实现思路不同，gVisor不提供虚拟机环境，kata提供一个用户空间内核，拦截所有的应用程序系统调用并充当来宾内核，而无须通过虚拟化硬件进行转换
> 
> Visor 不是简单地一股脑地将应用程序系统调用重定向到主机内核的，它自己实现了大多数内核原语（例如信号、文件系统、管道等），并在这些原语之上构建了完整的系统调用处理程序。

这个问题是Kata Container 诞生的主要推力之一。Kata 的出现不是取代现有的容器解决方案，而是要解决容器的安全性问题。在Kata Container 中，每个容器都有自己的轻量级虚拟机和微型内核，将相互不信任的租户放在同一集群上，能够加强租户之间的隔离。

在Kubernetes 集群中，我们创建一个Kata Container 就像创建一个普通的容器，我们只需要在Pod 的spec 中指定runtimeClassName为Kata。

容器技术的具体细节

与节点相关的调优方案

Namespace、CGroups技术

如何选择和构建存储方案

如何对CPU、内存、磁盘和网络进行调优，以使集群获得最优性能

### 容器存储驱动

> 用于管理容器的文件系统

容器镜像以分层的形式组织管理，如图2-12 所示，不同的分层被不同的镜像共享。容器的镜像层都是只读的，在基础镜像上不断叠加。在运行容器的时候，镜像最上层会挂载容器的可写层。容器的可写层一般不用于存储用户的容器数据，以防容器重启后该数据丢失。但由于容器依然需要往容器可写层上读写数据，因此需要由存储驱动来管理容器的文件系统。

由于镜像具有共享特性，所以对容器可写层的操作需要依赖存储驱动提供的写时复制和用时分配机制，以此来支持对容器可写层的修改，进而提高对存储和内存资源的利用率。

**写时复制**

写时复制，即Copy-on-Write。一个镜像可以被多个容器使用，但是不需要在内存和磁盘上做多个拷贝。在需要对镜像提供的文件进行修改时，该文件会从镜像的文件系统中被复制到容器的可写层的文件系统中进行修改，而镜像中的文件不会改变。不同容器对文件的修改都相互独立、互不影响。

**用时分配**

按需分配空间，而非提前分配，即当一个文件被创建出来后，才会分配空间。

对文件的添加、修改、删除和读写都只发生在容器的可写层，因此不同容器对文件的修改都相互独立、互不影响。

**存储驱动**

> 针对Kubernetes 的Pod 而言，容器读写数据应该发生在外挂的卷上，容器可写层不应该作为容器读写数据的主要渠道。在存储驱动的选择上，稳定性和可维护性应该是相对性能而言的、优先级更高的考量因素，所以Overlay2 是必然的选择。而对于ZFS 或BtrFS，除非有特殊需求，并不建议将它们作为运行时的默认存储驱动。事实上，现在Docker 和Containerd 都将Overlay2 作为默认或者建议的存储驱动。

<img src="./img/存储驱动1.png" />

<img src="./img/存储驱动2.png" />

- AUFS
- OverlayFS
- DeviceMapper
- BrtFS
- ZFS

## 容器编排

> 相较于Mesos、Docker Swarm，k8s胜出的根本原因就在于其对管理范畴的所有对象进行了抽象，通过模型标准化将容器云平台各个维度问题解决得非常完美

kubernetes最初依托于Docker技术，着力于集群的管理、容器编排与服务发现。将基础架构层面的计算、网络、存储以及运行在技术架构之上的应用和服务都进行了抽象，通过统一的模型来管控云计算中涉及的所有要素，并将他们由点变线，理出一组独立的、可组合的控制流程。

这些流程从对象创建开始持续将其推向所需状态，而无须开发者介入。

云原生是将应用程序构建为微服务，并将其运行在完全动态地利用云计算模型优势的容器编排平台上的方法。主要关注如何创建和部署应用程序，而不是关心运行在哪里。

- 松耦合的微服务
- 无状态且可规模化部署
- 故障的容忍性和弹性

kubernetes的在容器化时代的角色

- 集群管理
- 作业调度与作业管理：多种存储方式、自动可控的升级和回退、高利用率的调度机制、有效的自愈机制、密码和配置管理
- 服务发现和服务治理：利用DNS和集群IP地址向集群内外提供服务，在分发流量的时候能够达到负载均衡，避免出现某个容器的流量过高的情况。

## 核心优势

**声明式系统**

追求的是最终一致性，由系统保证一直尝试，并使实际状态一致，因此整个系统都基于异步调用。

将各类解决问题的对象做了抽象：计算节点Node、运行应用的实体Pod、可供访问的应用服务service

**控制器模式**

> 标准的生产者-消费者模型，informer监听所关注的对象变化，这些时间由APIServer推送给控制器，控制器将对象保存在本地缓存中，并将对象的主键推送至消息队列。然后再由控制器生成的多个工作线程获取对象主键，并按照期望状态完成配置更改然后将最终状态写回至APIServer

每种抽象出来的对象，都有其对应的控制器组件，每个控制器监听其所关注的对象的变更，然后按照对象中最新的期望状态进行系统配置，然后更新该对象的实际状态。

client-go工具对控制器的编写提供了完备的自动化支持，任何kubernetes对象都可以通过client-go创建供控制器使用的informer（用于接收资源对象的变化，Add、Update、Delete、可以注册相应的EventHandler）和Lister接口（提供主动查询资源对象）

<img src="./img/控制器模式.png" />


## 协同工作原理

> 此架构优势是各司其职，巧妙灵活，缺点是运维复杂度相对较高，在整个业务流中有任何组件出现故障都会使kubernetes不可用

Scheduler、ControllerManager、kubelet，都有一个控制循环，监听APIServer中的对象变更，进行配置更新并写回状态给APIServer，并持久化到etcd中

APIServer作为集群的网关，接收所有请求，例如用户创建Deployment，经过认证鉴权和准入三个环节，将其报存到etcd中。

DeploymentController监听到APIServer中的deployment变更事件（这里是创建），开始执行逻辑，还包括读取selector定义过滤当前命名空间中的ReplicaSet对象，或者创建新ReplicaSet对象并且发送给APIServer（同样需要保存到etcd中），然后这个对象又有ReplicaSetController监听到并执行同样的逻辑，以此类推。

**插件化框架**

提供了容器运行接口、容器存储接口、容器网络接口，用户可以选择自己想要的插件来整合集群。

**标准化推动**

定义扩展的资源对象，例如OAM

## 模型设计

**通用设计原则**

- 业务模型化，操作都以API的形式发布出来
- 控制器的行为是可重入和幂等的，使得系统一直朝用户期望状态努力，且结果稳定
- 所有对象是互补可组合的
- API复杂度与对象数量成线性比例
- API对象状态不能依赖于网络连接状态
- 尽量避免让操作机制依赖于全局状态

### TypeMeta

> 定义我是什么

**Group**

归类分组，例如基本功能的core、应用部署相关的apps

<img src="./img/typemeta.png" />

**Kind**

对象的基本类型：Node、Pod、Deployment

**Version**

对象模型的版本，kubernetes API Server允许通过Conversion方法转换不同版本的对象数星星。

### TypeData

> 定义我是谁

用Namespace进行隔离，Namespace与Name唯一标识一个对象实例。

**Namespace**

定义对象所属命名空间

**Name**

定义对象的名字

**Label**

用于解决对象之间的内嵌以及关联关系，通过label以及selectoor管理对象和对象的松耦合关系。

Label定义这些对象之间的可识别属性，kubernetesAPI支持以Label作为过滤条件查询对象。或者其他对象只需要定义Label Selector就可以按条件查询出需要关联的对象。

**Annotation**

属性扩展，虽然不能进行筛选，但是可以作为面向系统管理员和开发人员的注释信息。

**Finalizer**

> 防止资源泄漏，就是如果删除对象立即就删除了相关资源，这时候如果外部系统无法连通，控制器发生了重启，要删除的资源没有删除，这些对象永远泄漏了。

本质是一个资源锁，在接收某对象的删除请求时会检查Finalizer是否为空，如果为空则只会对其做逻辑删除（更新metadata.deletionTimestamp字段）。具有Finalizer对象的不会立即删除而是等到Finalizer中的，也就是与该对象相关的所有外部资源已被删除，这个对象才会被删除。

**ResourceVersion**

每个对象任意时刻都有其ResourceVersion，对象更改时其值也会增加。

MVCC，乐观锁机制，确保了分布式系统中的任意多线程能够无锁并发访问对象，极大地提升了系统的整体效率。

**Spec**

用户期望状态

**Status**

对象象的实际状态，由对应的控制器收集实际状态并更新。

## 核心对象

<img src="./img/k8s核心对象.png" />

- Namespace：用于进行归类，可以通过权限控制来限制用户以何种权限访问哪些Namespace的哪些对象，进而构建一个多租户、彼此隔离的通用集群
- Pod：一个或者多个容器镜像的组合，具有基本的自恢复能力
- ServiceAccout：在启用了安全配置集群后，pod中进程与API Server进行通信一定要进行身份认证，每个命名空间都有一个默认的ServiceAccount，并且生成JWTToken，保存在Secret中，用户可以在pod中指定ServiceAccout（默认为default），其对应的Token会被挂载在Pod中，以此来与APIServer进行通讯。
- ReplicaSet：可以理解为指定副本数量的pod，保证高可用
- Deployment：（Deployment->ReplicaSet->Pod，比单纯的声明管理pod更好）用来描述发布过程对象，在某个应用有新版本发布时Deployment会同时操作两个版本的ReplicaSet，内置多种滚动升级策略(升级暂停、恢复、回滚)，会按照既定策略降低老版本pod数量，同时创建新版本pod，并且保证正在运行的pod总数与用户期望的副本数一致（支持便利的扩容和缩容）。
- Service/Ingress: 描述负载均衡配置的对象，允许用户定义发布服务和的协议和端口，并定义Selector选择后端服务的Pod。Ingress在服务的基础上定义API网关的对象，通过Ingress，用户可以定义七层转发规则、网关整数等高级路由规则
- PersistentVolume/PersistentVolume-Claim：存储卷，手动设置或由StorageClass动态设置（如果没有设置，那就使用默认的）
- CustomResourceDefinition：自定义资源定义，创建CRD时，APIServer会为指定的每个版本创建一个新的Restful资源路径，可以像原生资源一样调用使用。用于可以基于CRD这种开发式设计定义一切需要的模型来满足不同的业务需求。基于此的开发框架例如OperatorMode、OperatorSDK可以以极低的开发成本定义新对象

## 核心结构

### 核心控制平面组件

**APIServer**

本身是无状态的，支持横向扩展。

APIServer会在DefaultNamespace下创建一个类名为kubernetes的Service对象象，同时负责将它自己的podIP更新到对应的Endpoint对象中。

依赖于CoreDNS插件的负载，集群内部的Pod就可以通过服务名直接访问APIServer，Pod到APIServer的流量只会在集群内部转发，而不会被转发到外部的负载均衡器

**Controller Manager**

控制器采用主备模式和LeaderElection机制来实现故障转移（多个副本处于运行状态，但是只有一个副本作为领导者在工作，其他副本不断尝试获取锁，一旦领导者无法继续工作（租约的模式，领导者无法续租就会被释放掉锁），其他竞争者就能立即竞争上岗）

- Pod管理：Replication、Deployment
- 网络管理：Endpoints、Service
- 存储管理：Attachdetach

**Scheduler**

> 与控制器类似，也是采用Leader Election的主备模式
> 
> 承担着承上启下的作用，容易成为性能瓶颈

用于负载调度Pod，拓扑和负载感知，通过调整单个和集体的资源需求，服务质量需求，硬件和软件的策略约束，亲和力和反亲和力规范、数据位置、工作负载间的干扰、期限等，提高集群的可用性性能和容量

- 调度周期：为Pod选择最优节点的过程
- 绑定周期：通知APIServer这个决定的过程

Predicate

> 硬性条件，任何一个策略将节点标为不可用接下来的策略都不会选择了

- PodFitsHostPorts：判断Pod 所要求的端口是否在节点中被占用。
- PodFitsHost：判断节点是否是Pod 的spec.nodeName 指定的节点。
- PodFitsResources：判断节点是否能够满足Pod 中申请的Resources（例如CPU、Memory）的要求。
- PodMatchNodeSelector：判断节点是否满足Pod 的spec.nodeSelector 限制。
- NoVolumeZoneConflict：在给定存储卷的 Failure Zone 的限制下，评估 Pod 的spec.volume 申请的存储卷是否在这个节点可用。
- NoDiskConflict：判断Pod 的Volumes 和该节点上已挂载的磁盘是否有冲突。
- MaxCSIVolumeCount：判断节点上挂载的CSI Volumes 是否超出最大值。
- CheckNodeMemoryPressure：判断节点是否已经在汇报有内存压力。
- CheckNodePIDPressure：判断节点是否已经在汇报PID 即将耗尽。
- CheckNodeDiskPressure：判断节点是否已经在汇报有存储压力（系统磁盘满了或者接近满了）。
- CheckNodeCondition：根据节点的status.conditions 判断节点状态，如果节点网络不可用、Kubelet 的状态不是Ready 的，等等，那么这个节点是不适合运行Pod 的。
- PodToleratesNodeTaints：判断Pod 上的Toleration 是否能满足节点上的Taints。
- CheckVolumeBinding：检查节点是否能满足Pod 所有的Volume 请求，包括bound和unbound 的PVCs。

Priority

> 软性条件，根据各个策略进行打分，最后选择最高分

- SelectorSpreadPriority：尽量将相同的Service、StatefulSet 或者ReplicaSet 的Pod分布在不同节点。
- InterPodAffinityPriority：遍历weighted 的PodAffinityTerm 的元素，如果节点满足相应的PodAffinityTerm 条件，则总和加上该条件的 “权重”，再计算总和。总和越高的节点，分数越高。
- LeastRequestedPriority：节点上的已有Pod 所申请的资源总数越少，节点得分越高。这个策略能使负载在各个节点上更均衡。
- MostRequestedPriority：节点上的已有Pod 申请的资源总数越多，节点得分越高。这个策略能使Pod 调度到小规模的节点上。
- RequestedToCapacityRatioPriority：资源利用率（requested/capacity）越低，节点得分越高。
- BalancedResourceAllocation：各项资源使用率越均衡，节点得分就越高。
- NodePreferAvoidPodsPriority：如果节点的Annotation scheduler.alpha.kubernetes.io/preferAvoidPods 没有显示指定规避此Pod，则节点得分高。
- NodeAffinityPriority：满足Pod 的PreferredDuringSchedulingIgnoredDuringExecution条件的节点得分高。
- TaintTolerationPriority：Pod 不满足节点上的Taints 的数量越少，节点得分越高。
- ImageLocalityPriority：如果已经有了Pod 所需的容器镜像的节点，则得分相对高。
- ServiceSpreadingPriority：保障Service 后端的Pod 运行在不同节点上。对于Service服务来说，更能容忍单节点故障。
- CalculateAntiAffinityPriorityMap：尽量使属于同一Service 的Pod 在某个节点上的数量最少。
- EqualPriorityMap: 所有节点都具有相同的权重。

etcd

### 工作节点控制平面组件

> 安装kubelet、kubeproxy、容器运行时、网络服务插件，然后将kubelet和kube-proxy的启动参数中的APIServer URL执行目标集群的APIServer即可，APIServer在接收kubelet的注册后，会自动将此节点纳入当前集群的调度范围，这样pod节能调度该节点了

**kubelet**

负责启动容器的守护进程，向APIServer创建Node对象注册自身的节点信息（例如操作系统、Kernel版本、IP地址、总容量、可供分配的容量等），并且定时向APIServer汇报自身的信息（这些信息都会用于调度器使用）

当pod被调度到kubelet所在的节点上时，kubelet首先将pod中申请的volume挂载到当前节点上，然后调用容器运行时创建容器沙箱（PodSandbox）和容器，为容器沙箱设置网络环境，调用容器再改容器沙箱的网络命名空间中创建和启动容器（容器可能退出但沙箱还在，重新创建容器时无需在设置网络环境），kubelet会周期性的检查容器状态并定期汇报，通过cAdvisor监控容器资源的使用情况。

> 并不会直接操作容器，而是通过CRI接口调用创建、启动等的

容器沙箱是“pause”容器的抽象概念，也被称为infra容器，与用户容器捆绑运行在一个pod中，共享CGroup、Namespace等资源，最大的作用就是维护Pod网络协议栈。

- 管理pod
- 对容器的liveness和readiness进行检查
- 保护节点不被容器抢占所有资源

**kubeproxy**

也是一个控制器，监听service、endpoint独享的变化，并且维护service到后端end的路由，维护网络规则，执行TCP、UDP、SCTP流转发

- iptables模式
- iPVS模式

**容器运行时**

真正删除和管理容器的组件

高层运行时：Docker、Containerd、Cri-o
底层运行时：runc、kata、gVisor

相对Docker 而言，Containerd 减少了Docker所需的处理模块Dockerd 和Docker-shim，并且对Docker 支持的存储驱动进行了优化，因此在容器的创建、启动、停止、删除，以及对镜像的拉取上，都具有性能上的优势。架构的简化同时也带来了维护的便利。


## Pod详解

### 生命周期

**创建流程**

<img src="./img/pod创建流程.png" />


**删除流程**

<img src="./img/pod删除流程.png" />


### Qos级别

根据CPU、Memory资源的requests和limits来划分Pod的质量保证级别

（1）Guarantee：Pod 的每个容器申请的CPU 使用量与Memory 的limits 值和requests值相等。如果容器只指定了Memory 或者CPU 的limits，没有指定requests，那么Kubernetes会自动给它填写一个与limits 值相等的requests。Pod 的QoS 是Guarantee 的。Guarantee是Kubernetes 的最高优先级。Kubelet 不会主动杀死Pod，除非它们所用的资源超过了Pod的limits。

（2）Burstable：Pod 内至少有一个容器指定了Memory 或CPU 的requests 或limits，Pod 不满足Guarantee 的条件，requests 的值和limits 的值不相等。requests 和limits 的配置规则如下：
● 如果容器指定了CPU 的requests 和limits，那么当容器的CPU 使用量超过limits时，容器进程将会被限制。
● 如果容器只指定了CPU 的requests，没有指定limits，那么当节点压力不大时，该容器可以使用超过requests 值的节点上的剩余可用的CPU。
● 假设容器指定了Memory 的requests 和limits，当容器的内存使用超过requests 且没有超过limits 时，如果节点内存不足（已经没有BestEffort 的Pod 了），那么这个容器将被 “杀” 掉；当容器的内存使用量超过limits 时，容器将会被kernel “杀” 掉，容器状态将变成OOMkilled（Out-Of-Memory killed）。
● 如果容器只指定了Memory 的requests，没有指定limits，那么当容器的内存使用超过requests 时，容器可以使用节点上剩余的内存，但是当节点内存不足以满足其他容器时，该容器可能会被 “杀” 掉。

（3）BestEffort：Pod 的每个容器都没有Memory 和CPU 的requests 或limits 的值。这个级别的Pod 的优先级是最低的。当系统有了CPU 和Memory 的压力时，Pod 会率先被“杀” 掉。

### 节点亲和性(affinity)

Scheduler 负责实现Pod 的调度，通过执行一系列复杂的算法为每个Pod最终计算出每个Node 的得分，得分最高的就是最佳目标节点。对用户和运维者来说，无法预先知道Pod 最终会被调度到哪个节点上。但是有些特殊场景，我们又需要将Pod 调度到某些特定的节点上，这时我们就需要使用节点亲和性。节点亲和性的使用方式有两种：nodeSelector 和nodeAffinity。

**nodeSelector**

采用label selector 选择节点。如果Pod 指定了nodeSelector，那么它将会被调度到标签满足dedicated=demo 且run=nginx 的节点上。如果这些节点中没有一个能满足Pod 的资源申请（CPU 或Memory 不能够满足），那么这个Pod 将不会被调度。它会被Scheduler 加回调度队列重新调度，直到nodeSelector 和资源都能够被满足

**nodeAffinity**

 相当于nodeSelector 的高级功能，其规则的表达方式更丰富一些，且可以指定哪些规则是软性条件，哪些规则是硬性条件。如果规则是软性的，并且调度器不能完全满足它，那么这个Pod 也能被调度。preferredDuringSchedulingIgnoredDuringExecution 中的规则就是软性的，调度器将尝试执行但是不能保证满足所有条件；requiredDuringScheduling IgnoredDuringExecution 中的规则就是硬性的，就像nodeSelector 一样，是节点必须要满足的规则。IgnoredDuringExecution 意味着当节点上的标签在Pod 运行时发生更改以致不再满足Pod 上指定的规则时，Pod 仍将继续在该节点上运行。

nodeAffinity 的operator 值支持运算符In、NotIn、Exists、DoesNotExist、Gt、Lt。
对于nodeSelector 和nodeAffinity 的使用，需要注意以下几点：
● 如果Pod 同时指定nodeSelector 和nodeAffinity，则必须同时满足两个条件才能将Pod 调度到候选节点上。
● 如果nodeAffinity 中关联多个nodeSelectorTerms，且节点满足nodeSelectorTerms之一，就可以将Pod 调度到这个节点上。
● 如果nodeSelectorTerms 中关联了多个matchExpressions，则只有在节点满足所有matchExpressions 的情况下，才能将Pod 调度到节点上。
● preferredDuringSchedulingIgnoredDuringExecution 中的weight 字段在1～100 的范围内。如果一个节点满足该字段下的MatchExpressions，那么调度器会在该节点的调度优先级评分上加上weight。

### 节点容忍性(trints)

用于允许节点排斥或者驱逐某一类pod，可以用于构建专用节点，不允许其他pod运行在这个节点

对于taints 的effect，除了NoSchedule，还可以指定PreferNoSchedule 和NoExecute。PreferNoSchedule 是NoSchedule 的软限制，它告诉调度器，尽量不要将没有此Tolerations的Pod 调度到节点上。如果我们将NoExecute 的taints 添加到节点上，并且已经运行在此节点上的Pod 没有相应的Tolerations，那么Pod 将会立刻被驱逐。

● 如果在节点上放置多个taints，那么Pod 需要有相应的Toleration 才能被调度到此节点上。
● 如果Pod Tolerations 的effect 为空，那么所有的effect 都可以容忍。
● 对DaemonSet 来说，它需要在各种 “花式taints” 的节点上运行，这里有种 “霸道” 的Tolerations 方式：当key 为空时，operator 为Exists，这意味着，只要所有的key存在就可以容忍任何taints。

## 插件机制

### CRI(容器运行时插件)

> 相比Docker，独立出来的Containerd 和Crio 的调用层级要简洁很多，能够直接被kubelet 调用。其中Crio 的conmon 就对应containerd-shim，其作用是一样的

Container Runtime Interface，无需修改kubelet就可以支持更多的容器运行时。要实现一个新的容器运行时，就需要实现下述接口。

kubelet通过设置`--container-runtime`设置容器运行时。默认是“ Docker ”。 通常设置成“ remote ”， 即从外部调用容器运行时， 通过参数--container-runtime-endpoint 来找到容器运行时的服务地址，一般是Linux 本地的Socket地址。contianerd 的默认地址为`unix:///run/containerd/containerd.sock`，Crio 的默认地址为`unix:///run/crio/crio.sock`。

<img src="./img/cri1.png" />

CRI 其实就是一组gRPC 接口，包括两类：RuntimeService 和ImageService

<img src="./img/cri2.png" />

- RuntimeService：包括一组对容器沙箱和容器查询进行操作和管理的接口，一组与容器交互的接口，以及运行时版本和状态查询的接口
- ImageService：提供了对容器镜像的查询和操作的接口。

容器运行时包含如下基本单元：
● CRI gRPC Server：用于接收来自kubelet 的CRI 请求。
● Streaming Server（流服务）：允许exec 或者attach 到用户容器。
● CNI：允许调用网络插件完成容器的网络设置。
● Container Service：用于管理所有的容器。
● Image Service：用于管理所有的容器镜像。
● Process Management：用于管理容器的shim 进程，shim 进程用于管理容器内的所有进程。

### CNI(网络插件)

- 所有的Pod 能够不通过NAT 就能相互访问。
- 所有的节点能够不通过NAT 就能相互访问。
- 容器内看见的IP 地址和外部组件看到的容器IP 地址是一样的。

ip是以pod为单位进行分配，一个pod内部的所有容器共享一个网络栈，pod里面的所哟容器能通过localhost:port来连接

Flannel 是由CoreOS 开发的项目，是CNI 插件早期的入门产品，简单易用。Flannel使用Kubernetes 集群现有的etcd 集群来存储其状态信息，从而不必提供专用的数据存储，只需要在每个节点上运行flanneld 来守护进程。

每个节点都被分配一个子网，为该节点上的Pod 分配IP 地址。同一主机内的Pod 可以使用网桥进行通信，而不同主机上的Pod 将通过flanneld 将其流量封装在UDP 数据包中，以路由到适当的目的地。封装方式默认和推荐的方法是使用VxLAN，因为它具有良好的性能，并且比其他选项要少一些人为干预。虽然使用VxLAN 进行封装的解决方案效果很好，但缺点是该过程使流量跟踪变得困难。

<img src="./img/flannel.png" />

Calico 是Kubernetes 生态系统中的另一个流行的联网选项。Calico 以其性能、灵活性和网络策略而闻名。不仅涉及在主机和Pod 之间提供网络连接，而且还涉及网络安全性和策略管理。对于同网段通信，基于第3 层，Calico 使用BGP 路由协议在主机之间路由数据包，使用BGP 路由协议也意味着数据包在主机之间移动时不需要包装在额外的封装层中。这样，当出现网络问题时，它允许使用标准的调试工具进行更常规的故障排除，从而使开发人员和管理员更容易定位问题。对于跨网段通信，基于IPinIP 使用虚拟网卡设备tunl0，用一个IP 数据包封装另一个IP 数据包，外层IP 数据包头的源地址为隧道入口设备的IP 地址，目标地址为隧道出口设备的IP 地址。

网络策略是Calico 最受欢迎的功能之一，它通过ACLs 协议和kube-proxy 来创建iptables 过滤规则，从而实现隔离容器网络的目的。此外，Calico 还可以与服务网格Istio集成，在服务网格层和网络基础结构层上解释和实施集群中工作负载的策略。这意味着您可以配置功能强大的规则，以描述Pod 应该如何发送和接收流量、提高安全性，以及加强对网络环境的控制。Calico 属于完全分布式的横向扩展结构，允许开发人员、管理员快速和平稳地扩展部署规模。对于性能和功能（如网络策略）要求高的环境，Calico 是一个不错的选择。

<img src="./img/calico.png" />

### 存储插件

#集群搭建

如何构建高可用集群

如何保证集群上的应用高可用

如何管理高可用kubernetes平台

#镜像仓库

Metadata的管理

镜像的块文件管理

镜像的分发

镜像仓库的实现

基于容器镜像扫描和准入的安全保证方案

#如何构建多租户

kubernetes本身没有多租户的概念

从不同层面描述多租户集群需要解决的问题

kubernetes提供的备选方案，认证集成、授权管理、隔离和配额管理

#网络接入方案

不同层级的网络协议，负载均衡原理，kubernetes的网络接入支持

#API网关和服务网格

API网关是集群的流量入口

Ingress的设计缺陷、社区相应的替代方案

轻量级的入站流量管理扩展项目Contour

尝试将入站流量和服务网格统一管理的Istio

数据面组件Envoy的架构与实现

#可观测性

监控指标是一个衡量系统功能是否达到运维标准的重要因素。

基于kubernetes的监控要素，包括指标收集、日志管理、系统运维流程上遵循的最佳实践。

基于监控系统指标数据的集群自动恢复方法

