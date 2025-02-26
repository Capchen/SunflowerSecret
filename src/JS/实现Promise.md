---
article: true
author:
  name: Cap
category: ''
date: 2024-08-23
description: ''
editLink: false
icon: ''
image: ''
isOriginal: true
shortTitle: ''
star: false
sticky: 1
tag: javascript
timeline: true
title: 手撕Promise
---


```js
class MyPromise {

}

const promise1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 3000)
})
promise1.then(rs => {

},()=>{}).catch(err => {})
```
