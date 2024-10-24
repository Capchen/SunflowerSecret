---
  title: '手撕Promise'
  shortTitle: ''
  description: ''
  icon: ''
  author:
    name: 'Cap'
  isOriginal: true
  date: 2024-08-23
  category: ''
  tag: 'javascript'
  sticky: 1
  star: false
  article: true
  timeline: true
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
