

# 特性

- Swarmvl支持1.6.0版本或更新版本的DockerEngine。 从1.12版本开始， Swarm v2 内嵌到了 DockerEngine里。
- Swarm每个版本的 API都和同版本的 DockerAPI兼容。 API可以向后兼容一个版 本。
- 在 Swarm vl 里，为了多个 Swarm 主节点的实现，选主机制使用的是主库(仅仅 在使用发现服务，比如 Etcd、 Consul 或者 ZooKeeper 部署 Swarm 时才支持) 。
- 在 Swarm v2 里，使用去中心化的机制来构建选主机制 。 Swarm v2 不再需要特定 的发现服务，因为它集成了 Etcd，这是 Raft公式算法的一种实现(详见第 2章“探 索发现服务”) 。
- 在 Swarmvl 的术语里，主 Swarmmaster节点被称为 prima可(主节点)，其他 master节点被称为 replica (副本) 。 在 Swarmv2里，有 Master和 Worker节点的 概念。 集群使用Ra食自动管理主节点。
- 基础和高级调度选项 。 schedule (调度器)是一种决定容器物理上放置于哪台主机 的算法。 Swarm使用一系列内置的调度器。
- Constraint (约束条件)和 affinity(共同关系)辅助运维人员做出调度决策 。 比如， 某个用户想要让数据库容器物理上接近，就可以通知调度器去这么做。 约束条件 和共同关系使用 Docker Swarm label (标签) 。
- 在 Swarm v2 里，使用内建 DNS Round-Robin 实现集群内的负载均衡，也支持外 部负载均衡，通过路由网格机制，由 IPVS实现。
- 高可用和故障恢复机制意味着用户可以创建超过一个 master的 Sw缸m。 因此，如 果某个 master服务者机了还有其他 master可以继续控制 。 当构建至少 3 个节点 的集群时，默认可用 Swarmv2。 所有节点都可以作为 master节点。 另外， Swarm v2 包括健康指标信息 。

# 安装

## 可视化

```bash
docker service create \
--name=viz \
--publish=8000:8000/tcp \
--constraint=node.role==manager \
--mount=type=bind,src=/var/run/docker,dst=/var/run/docker.sock \
dockersamples/visualizer
```