===tag=中间件
===description=redis的内部数据结构概览
===pinned=false

# Stream

> Redis5.0的新数据结构, Stream 的消费模型借鉴了 Kafka 的消费分组的概念，它弥补了 Redis Pub/Sub 不能持 久化消息的缺陷。但是它又不同于 kafka，Kafka 的消息可以分 partition，而 Stream 不行。 如果非要分 parition 的话，得在客户端做，提供不同的 Stream 名称，对消息进行 hash 取 模来选择往哪个 Stream 里塞。

Stream有一个消息链表，将所有加入的消息都串起来，每 个消息都有一个唯一的 ID 和对应的内容。消息是持久化的，Redis 重启后，内容还在。

每个 Stream 都可以挂多个消费组，每个消费组会有个游标 last_delivered_id 在 Stream 数组之上往前移动，表示当前消费组已经消费到哪条消息了。每个消费组都有一个 Stream 内唯一的名称，消费组不会自动创建，它需要单独的指令 xgroup create 进行创建，需要指定 从 Stream 的某个消息 ID 开始消费，这个 ID 用来初始化 last_delivered_id 变量。

每个消费组 (Consumer Group) 的状态都是独立的，相互不受影响。也就是说同一份 Stream 内部的消息会被每个消费组都消费到。

同一个消费组 (Consumer Group) 可以挂接多个消费者 (Consumer)，这些消费者之间是 竞争关系，任意一个消费者读取了消息都会使游标 last_delivered_id 往前移动。每个消费者有 一个组内唯一名称。

消费者 (Consumer) 内部会有个状态变量 pending_ids，它记录了当前已经被客户端读取 的消息，但是还没有 ack。如果客户端没有 ack，这个变量里面的消息 ID 会越来越多，一 旦某个消息被 ack，它就开始减少。这个 pending_ids 变量在 Redis 官方被称之为 PEL，也 就是 Pending Entries List，这是一个很核心的数据结构，它用来确保客户端至少消费了消息一 次，而不会在网络传输的中途丢失了没处理。


