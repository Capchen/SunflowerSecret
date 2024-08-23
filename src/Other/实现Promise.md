---
  title: 'Promise'
  shortTitle: ''
  description: ''
  icon: ''
  author:
    name: 'Cap'
  isOriginal: true
  date: 2019-09-22
  category: ''
  tag: 'javascript'
  sticky: 1
  star: false
  article: true
  timeline: true
  image: ''
  editLink: false
---

## 新建一个Promise实例的时候，发生了什么

```javascript
const chenjian = new Promise(function(resolved, rejected) {
    setTimeout( () => {
      resolved()
    },1000)
  })
chenjian.then(function(){})
```

new一个实例的时候，Promise构造函数使用内部的doResolve方法运行了它的入参，所以为啥里面的代码会同步执行。代码如下

```javascript
function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._deferredState = 0;
  this._state = 0;
  this._value = null;
  this._deferreds = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
function doResolve(fn, promise) {
  var done = false;
  // 这就是为啥生成实例时会同步运行，因为这里运行了fn
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}
```
