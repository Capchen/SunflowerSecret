---
  title: '5分钟上手GSAP'
  shortTitle: ''
  description: ''
  icon: ''
  author:
    name: 'Cap'
  isOriginal: true
  date: 2023-11-27
  category: ''
  tag: 'js annimation'
  star: false
  article: true
  timeline: true
  image: ''
  editLink: false
---

## 什么是GSAP

动效库

> GSAP 允许您轻松地为 JS 可以触摸的任何东西设置动画。提供丝般流畅的性能和无与伦比的支持，让您可以专注于有趣的事情。

- [速查表](https://gsap.com/community/cheatsheet/)

### Core

基础的动效控制，能满足大部分动效场景。例如旋转，缩放，抛物线运动

### Plugins

能力拓展，能满足特殊动效场景。例如跟随鼠标滚轮的滚动动效

## 动起来

在 GSAP 中，Tweens 是指在动画中改变一个或多个属性的过程。以下是一个简单的 Tween 示例：

```js
gsap.to('.box', {
  x: 200,        // 将元素的 x 坐标移动到 200
  opacity: 0.5,  // 改变元素的不透明度
  duration: 1,   // 动画持续时间
  ease: 'power2.inOut',  // 缓动函数
});
```

to/from/fromTo这三个方法都能返回一个Tween实例

假设现在`.box`这个dom节点，在x轴上的偏移量为0`{x: 0}`

### to

偏移量从0到200

```js
gsap.to(".box", { x: 200 })
```

### from

偏移量从200回到0

```js
gsap.from(".box", { x: 200 })
```

### fromTo

```js
gsap.fromTo(".box", { x: 200 }, {x: 0})
```

偏移量从200到0

### set

```js
gsap.set(".box", {x: 100});
```

设置偏移量为100

set 是一瞬间的事

## Easing

控制动画运动的速率

[配置字典](https://gsap.com/resources/getting-started/Easing)

## Staggers

错落有致，控制一组元素动画的交错配置

```js
gsap.from(".box", {
    x: -150,
    duration: 1,
    opacity: 0,
    stagger: 0.2,
})
```

## Apple Watch 实战

[示例网站](https://www.apple.com.cn/apple-watch-series-9/)

1. 字往上提的渐入效果

## 排队动起来（timelines）

如果我们需要控制一系列复杂的动画，涉及到多个元素，
仅仅依靠延迟和上面说到的交错配置，其实是不够的。

那么Timelines来了。

Timelines 允许你将多个 Tweens 组织在一起，以便在时间上进行更复杂的控制。以下是一个创建 Timeline 的示例：

```js
const timeline = gsap.timeline();
timeline.to('.box', { x: 200, duration: 1 })
        .to('.box', { rotation: 360, duration: 1, ease: 'elastic' });
```

[查看官网例子](https://gsap.com/resources/getting-started/timelines)

## 控制动画（control）

从上面的示例可以看到，进行一个动画，我们没办法更精细的控制动画什么时候开始，什么时候结束。但我们可以拿到一个基础的Tween实例，一个timeline实例

有这两个实例，我们就可以控制对应的动画了。

可以在官网上看，这两个动画实例支持什么方法
[实例方法文档](https://gsap.com/docs/v3/GSAP/Timeline)

### 基础控制

```js
// store the tween or timeline in a variable
let tween = gsap.to("#logo", {duration: 1, x: 100});

//pause
tween.pause();

//resume (honors direction - reversed or not)
tween.resume();

//reverse (always goes back towards the beginning)
tween.reverse();

//jump to exactly 0.5 seconds into the tween
tween.seek(0.5);

//jump to exacty 1/4th into the tween 's progress:
tween.progress(0.25);

//make the tween go half-speed
tween.timeScale(0.5);

//make the tween go double-speed
tween.timeScale(2);

//immediately kill the tween and make it eligible for garbage collection
tween.kill();

// You can even chain control methods
// Play the timeline at double speed - in reverse.
tween.timeScale(2).reverse();

```

### 回调

- onComplete: 当动画完成时调用。
- onStart: 当动画开始时调用。
- onUpdate: 每次动画更新时调用（在动画活动期间的每一帧）。
- onRepeat: 每次动画重复时调用。
- onReverseComplete: 当动画在反向播放时再次达到起点时调用。

```js
gsap.to(".class", {
  duration: 1, 
  x: 100, 
  // arrow functions are handy for concise callbacks
  onComplete: () => console.log("the tween is complete")
})

// If your function doesn't fit neatly on one line, no worries.
// you can write a regular function and reference it
gsap.timeline({onComplete: tlComplete}); // <- no () after the reference!

function tlComplete() {
  console.log("the tl is complete");
  // more code
}
```

## 花式的动起来（plugins）

插件提供了额外的能力，我们也可以按需引入

[插件一览](https://gsap.com/resources/Plugins/)

需要注意的是，这里区分收费版，高级的使用需要付费。

### scrollTrigger

看官网代码

> 辅助线 markers: true

### Draggable

看官网代码

## 总结

优秀的JS动画库，对现代浏览器更友好。

一些高级功能需要付费，但是基础的动画支持已经满足大部分场景。

上手简单，应用不难，值得star
