---
article: true
author:
  name: Cap
category: ''
date: 2024-03-19
description: ''
editLink: false
icon: ''
image: ''
isOriginal: true
shortTitle: ''
star: true
sticky: 1
tag: BFF
timeline: true
title: models` 目录和 `dto` 目录的主要区别
---


**`models` 目录和 `dto` 目录的主要区别在于:**

* **`models` 目录:** 通常用于定义与数据库表或业务实体一一对应的模型类。这些类通常包含与业务逻辑相关的所有属性和方法。
* **`dto` 目录:** 通常用于定义用于数据传输的对象。这些类通常只包含数据本身，不包含任何业务逻辑。

**以下是一些更具体的区别:**

* **粒度:** `models` 目录中的模型类通常粒度更细，每个类对应一个具体的数据库表或业务实体。`dto` 目录中的 DTO 类粒度通常更粗，一个 DTO 类可以包含多个数据库表或业务实体的数据。
* **职责:** `models` 目录中的模型类通常负责与数据库交互，并封装业务逻辑。`dto` 目录中的 DTO 类只负责数据传输，不包含任何业务逻辑。
* **使用场景:** `models` 目录中的模型类通常在业务层使用。`dto` 目录中的 DTO 类通常在表现层和数据访问层使用。

**以下是一些示例:**

* **`models` 目录:**
    * `User.model.ts`：定义用户模型，包含 `id`、`username`、`password` 等属性和方法。
    * `Order.model.ts`：定义订单模型，包含 `id`、`user_id`、`product_id` 等属性和方法。
* **`dto` 目录:**
    * `LoginDto.ts`：用于登录时传输的数据，包含 `username` 和 `password` 属性。
    * `OrderDto.ts`：用于展示订单信息的数据，包含 `id`、`user_name`、`product_name` 等属性。

**总之，`models` 目录和 `dto` 目录是两个不同的概念，它们在项目中扮演着不同的角色。将它们区分开来可以提高代码的清晰度和可维护性。**
