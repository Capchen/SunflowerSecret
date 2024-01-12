---
title: 'Nest指东南西北' # 当前页面内容标题，默认为 Markdown 文件中的第一个 h1 标签内容
shortTitle: '' # 当前页面的短标题
description: '' # 当前页面内容描述
icon: '' # 当前页面图标的 FontClass 或文件路径 (建议填写)。
author: {
  name: 'Cap'
}
isOriginal: true # 当前文章是否为原创。
date: 2024-1-20 # 写作时间。
category: '' # 分类
tag: '' # 标签
sticky: 100 # 是否在列表中置顶。当填入数字时，数字越大，排名越靠前
star: false # 是否收藏在博客主题的文章列表中。当填入数字时，数字越大，排名越靠前。
article: true # 是否将该文章添加至文章列表中
timeline: true # 是否将该文章添加至时间线中
image: '' # 设置预览图 (分享图)，请填入绝对路径
editLink: false # 设置横幅图片 (宽屏分享图)，请填入绝对路径。
---

## 一些文档

- [官方文档](https://docs.nestjs.com/)
- [翻译文档](http://nestjs.inode.club/)
- [翻译文档](https://nest.nodejs.cn/)

## 概念

### MVC


### IOC

依赖自动注入，不需要手动处理依赖关系及注入操作，一切都是根据装饰器声明自动扫描并创建注入。

### AOP

面向切面编程

- Middleware
- Guard
- Interceptor
- Pipe
- ExceptionFilter

它们的调用顺序为：

Middleware -> Guard -> Interceptor -> Pipe -> ExceptionFilter

nest继承了express的概念，所以最外层会调用Middleware，
进入具体路由之后，接着调用Guard，例如权限判断
接着进入Controller之前，会调用Interceptor拦截器
完成之后，调用Pipe对参数做处理，然后匹配抛出的异常执行ExceptionFilter

## 控制器

### 作用域

TODO

## 模块（Modules）

- 模块的生命周期是怎样的
- 一个共享模块被修改值后，是否会影响到所有使用这个模块的其他模块
- 同一模块被导入，又被导出的意义是什么
