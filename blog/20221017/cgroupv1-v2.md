===tag=云原生
===description=cgroupv1和v2的变化
===pinned=false
===create=2022-10-10


cgroupv1和v2有所区别，groupv2各项指标是混在一个group下的，而不是在具体的指标下再分组

```bash
$mount | grep cgroup

cgroup2 on /sys/fs/cgroup type cgroup2 (rw,nosuid,nodev,noexec,relatime,nsdelegate,memory_recursiveprot)
```

# v2

## cpu

- cpu.stat: 一个只读的文件，报告usage_usec, user_usec, system_usec
- cpu.weight: 所有的子权重组成一起，由父资源组同比率进行分配
- cpu.weight.nice
- cpu.max
- cpu.max.burst
- cpu.pressure: 显示cpu的压力信息
- cpu.uclamp.min: 为0即不提高利用率
- cpu.uclamp.max


## cpuset

- cpuset.cpus: 该cgroup中可供使用的CPU
- cpuset.cpus.effective: 可用cpus子集，受父group影响
- cpuset.mems: 可用内存节点
- cpuset.mems.effective
- cpuset.cpus.partition

## memory

- memory.current: 当前内存利用值
- memory.min: 最小内存使用量，不过受父group的限制，超过了就按比例同比例分配
- memory.low: 用于内存保护，低于这部分的不会进行内存回收
- memory.high: 
- memory.max： 超过这个就会OOM
- memory.reclaim: 主动回收内存的阈值
- memory.peak: 
- memory.oom.group
- memory.events: 事件日志相当于
- memory.events.local
- memory.stat
- memory.numa_stat
- memory.swap.current
- memory.swap.high
- memory.swap.max
- memory.swap.events
- memory.zswap.current
- memory.zswap.max
- memory.pressure

## io

- io.stat
- io.cost.qos
- io.cost.model
- io.weight
- io.max
- io.pressure

## pid

- pids.max: 最大个数，进程数的限制
- pids.current: 当前cgroup以及子组中的所有数量

## Device controller

- rdma.max
- rdma.current

## HugeTLB

- hugetlb.<hugepagesize>.current
- hugetlb.<hugepagesize>.max
- hugetlb.<hugepagesize>.events
- hugetlb.<hugepagesize>.events.local
- hugetlb.<hugepagesize>.numa_stat

## misc

- misc.capacity
- misc.current
- misc.max
- misc.events

# v1

> 参考https://docs.kernel.org/admin-guide/cgroup-v1/blkio-controller.html