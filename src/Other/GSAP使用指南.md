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

```js
gsap.to(".box", { x: 200 })
```

假设现在`.box`这个dom节点，在x轴上的偏移量为0`{x: 0}`

### to

偏移量从0到200

### from

偏移量从200回到0

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

## 排队动起来（timeline）

## 按照我的指令动起来 （control）

## 花式的动起来（plugins）

### scrollTrigger

### Draggable
