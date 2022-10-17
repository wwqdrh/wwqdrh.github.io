===tag=云原生
===description=cgroupv1和v2的变化
===pinned=false

# v2

## cpu

- cpu.stat
- cpu.weight
- cpu.weight.nice
- cpu.max
- cpu.max.burst
- cpu.pressure
- cpu.uclamp.min
- cpu.uclamp.max

## memory

- memory.current
- memory.min
- memory.low
- memory.high
- memory.max
- memory.reclaim
- memory.peak
- memory.oom.group
- memory.events
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

- pids.max
- pids.current

## cpuset

- cpuset.cpus
- cpuset.cpus.effective
- cpuset.mems
- cpuset.mems.effective
- cpuset.cpus.partition


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