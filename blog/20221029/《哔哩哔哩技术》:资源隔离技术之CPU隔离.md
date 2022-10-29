===tag=专栏
===description=《哔哩哔哩技术》公众号-资源隔离技术之CPU隔离
===pinned=false
===create=2022-10-29

> [原文链接]:(https://mp.weixin.qq.com/s/q-O2L-6_DMwhjCjGVAvmrg)

# CFS模型

每个CPU都有一个运行队列rq，每个rq会有一个cfs_rq运行队列，该结构包含一棵红黑树rb_tree，用来链接调度实体se，每次只能调度一个se到cpu上去运行。如果想要在任意时刻cfs_rq上的se运行时间都尽可能的接近，那么就需要不停地切换se上cpu运行，但是频繁的切换会有开销，想要减小这种开销，就需要减少切换的次数。为了可以减小开销还能保证时间上的统一，内核便给cfs_rq的se进行排序，让他们按照时间顺序挂在rb_tree上，这样每次取红黑树最左边的se，就可以得到运行时间的最小的那个。但实际上，se又会有优先级的概念，不同优先级的se所分配到的cpu时间片是不一样的（内核代码[4]的注释中提到，相差一个nice值，可能有约10%cpu的时间差）。内核便经过一系列公式的转换，可以得到一样的值，这个转换后的值称作虚拟运行时间vruntime，CFS实际上只需要保证每个任务运行的虚拟时间是相等的即可。


每次挑选se上cpu运行，当分配的时间片用完，就会将它再放回到cfs_rq中，挂在红黑树的适当位置。当然也有可能会碰到运行过程中，时间片还未用完，但主动放弃运行的情况，如睡眠（TASK_INTERRUPTIBLE）或等待某种资源（TASK_UNINTERRUPTIBLE），这时就需要出列等待，进到“小黑屋”，直至相应事件发生才会再次放到红黑树中等待调度。等待后重新放入红黑树的se，如果休眠时间比较长，vruntime可能会非常小，便会迅速得到运行。为了避免其疯狂地执行，cfs_rq上会维护min_vruntime，如果新唤醒的vruntime(se) < vruntime (cfs_rq→min_vruntime)，会将se的vruntime修正至接近min_vruntime，这样就可以保证此类se优先执行，但是又不会疯狂执行。

# GI模型

group identity特性相对于upstream kernel的CFS设计，新增一棵低优先级红黑树，用于存放低优先级任务。

- 单次最小运行时间粒度
- 唤醒粒度
- 超线程干扰和SMT expeller技术