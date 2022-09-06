# 简介

Micro 是一个云原生开发平台。它解决了在云中构建服务的关键要求。 Micro 利用微服务架构模式并提供一组充当平台构建块的服务。 Micro 处理分布式系统的复杂性，并提供更简单的可编程抽象来构建。

- API - HTTP Gateway which dynamically maps http/json requests to RPC using path based resolution
- Auth - Authentication and authorization out of the box using jwt tokens and rule based access control.
- Broker - Ephemeral pubsub messaging for asynchronous communication and distributing notifications
- Config - Dynamic configuration and secrets management for service level config without the need to restart
- Events - Event streaming with ordered messaging, replay from offsets and persistent storage
- Network - Inter-service networking, isolation and routing plane for all internal request traffic
- Proxy - An identity aware proxy used for remote access and any external grpc request traffic
- Runtime - Service lifecycle and process management with support for source to running auto build
- Registry - Centralised service discovery and API endpoint explorer with feature rich metadata
- Store - Key-Value storage with TTL expiry and persistent crud to keep microservices stateless