# 简介

go-kit除了经典的分层架构外，还在endpoint层提供了很多公用的拦截器，如log，metric，tracing，circuitbreaker，rate-limiter等，来保障业务系统的可用性。

go-kit不像其他微服务框架，与其说是一个框架倒不如说是一个工具包，提供了微服务领域中相关的工具封装，但是不会限死你代码编写风格
