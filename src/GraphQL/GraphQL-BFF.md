# 基于GraphQL的前端BFF实现demo

## 背景

关键字：

- 中台
- 聚合
- 按需

解决服务端单一稳定与端的差异灵活诉求之间的矛盾

## 技术选型

GraphQL: 图查询语言

[查看语言支持GraphQL](https://graphql.org/code/)

- Client: Vue + Vue Apollo
- Server: NestJS + Apollo Server

## 实现

### 客户端实现Demo

```js

npm install --save graphql graphql-tag @apollo/client

npm install --save @vue/apollo-composable

```

```js

// graphql实例
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3000/graphql'
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})

```

### 服务端实现Demo

#### Schema fist（单个graphql-server）

请看具体工程演示

#### 联邦模式（多个graphql-server）

基于apollo router的实现demo，请看具体工程演示

### BFF概览

[架构图概览](https://confluence.gyenno.com/pages/viewpage.action?pageId=59247288)

## 需要进一步明确的问题

综上：

加入BFF一层，是后端与前端的解耦。不用GraphQL也能解决服务端单一稳定与端的差异灵活诉求之间的矛盾。

只是GraphQL天然支持，对前端更友好,但是对后端挑战也更大。

### 技术架构问题

- 前端BFF还是后端BFF

- 是不是可以不用graphQL

- BFF内部结构如何梳理，单个BFF还是多个BFF

- BFF与上下游的职责划分，规则定制

### 成本问题

- 作为承接页面和接口的中间商，需要额外的人力投入维护迭代

- 需要额外的学习成本

- 会有一定的试错成本

- 团队人员流动的替代成本

### 落地收益问题

- 当前能切入的业务点是什么？

- 前期可以预测到，需要double time的投入，后期的效率提升又该从哪些维度评估
