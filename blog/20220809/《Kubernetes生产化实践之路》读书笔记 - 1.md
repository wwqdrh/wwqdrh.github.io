===tag=读书笔记
===description=Kubernetes生产化实践之路-第1-2-3章
===create=2022-08-09

# 架构基础

pod的删除是优雅删除，在调用删除命令时，是指上是为Pod添加DeletionTimestamp，后续再多个控制器，代理对Pod发起一系列的更新动作包括添加、删除Finalizer控制资源的释放后才会删除

不同的Pod和容器，运行在不同的mntuts、PID、IPC Namespace上，相互之间无法访问对方的文件系统、进程、IPC信息；同一个Pod的容器，其mnt、PID Namespace也不共享

# 计算节点管理

有状态应用则定义StatefulSet或Operator，还要规划存储卷。

无状态应用定义Deployment、ReplicaSet

遵循代码和配置分离的原则，密码证书等敏感信息应该定义在Secret，其他定义在ConfigMap


# 构建高可用集群