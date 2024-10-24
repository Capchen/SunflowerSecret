
# JavaScript 错误处理: try...catch 和 Promise 的 then...catch

## try...catch

`try...catch` 语句用于处理同步代码中可能发生的错误。

### 基本语法:

```javascript
try {
  // 可能会抛出错误的代码
} catch (error) {
  // 处理错误的代码
}
```

### 特点:

- 用于同步代码
- 可以捕获代码块中的任何错误
- 不能用于异步操作（如 Promise 或 async/await 中的错误）

## Promise 的 then...catch

Promise 提供了 `then` 方法来处理成功的情况,`catch` 方法来处理错误。

### 基本语法:

```javascript
somePromise
  .then(result => {
    // 处理成功的结果
  })
  .catch(error => {
    // 处理错误
  });
```

### 特点:

- 用于处理异步操作
- `catch` 可以捕获 Promise 链中任何地方发生的错误
- 可以链式调用多个 `then`

## 实际示例

让我们通过一些代码示例来更好地理解这两种错误处理机制:

```js
// try...catch 示例
function divideSync(a, b) {
  try {
    if (b === 0) {
      throw new Error("除数不能为零");
    }
    return a / b;
  } catch (error) {
    console.error("发生错误:", error.message);
    return null;
  }
}

console.log(divideSync(10, 2));  // 输出: 5
console.log(divideSync(10, 0));  // 输出: 发生错误: 除数不能为零 然后输出: null

// Promise 的 then...catch 示例
function divideAsync(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("除数不能为零"));
    } else {
      resolve(a / b);
    }
  });
}

divideAsync(10, 2)
  .then(result => console.log("异步结果:", result))
  .catch(error => console.error("异步错误:", error.message));

divideAsync(10, 0)
  .then(result => console.log("异步结果:", result))
  .catch(error => console.error("异步错误:", error.message));

```

1. `try...catch` 用于同步函数 `divideSync`。它可以立即捕获并处理错误。
2. Promise 的 `then...catch` 用于异步函数 `divideAsync`。它允许我们在 Promise 解析后处理结果或错误。
3. 在 Promise 示例中,即使我们没有显式地抛出错误,`reject` 函数也会触发 `catch` 块。

这两种方法各有优势,选择哪种取决于你的代码是同步的还是异步的。在现代 JavaScript 开发中,特别是在处理网络请求、文件操作等异步任务时,Promise 的 `then...catch` (或者 `async/await` 与 `try...catch` 的组合) 更为常用。
