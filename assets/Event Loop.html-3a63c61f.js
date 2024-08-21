import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as l,c as s,a as e,b as d,e as r,d as t}from"./app-c9c03ce9.js";const c="/SunflowerSecret/assets/image-449197f6.png",o="/SunflowerSecret/assets/image-1-f003a0bc.png",u={},v=t(`<h1 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h1><h2 id="官网简化图" tabindex="-1"><a class="header-anchor" href="#官网简化图" aria-hidden="true">#</a> 官网简化图</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   ┌───────────────────────────┐
┌─&gt;│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │&lt;─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="概念理解" tabindex="-1"><a class="header-anchor" href="#概念理解" aria-hidden="true">#</a> 概念理解</h2><figure><img src="`+c+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><ul><li><p>事件循环在node服务启动的时候就会运行</p></li><li><p>node中的异步处理，是交给libuv来处理的</p></li><li><p>只有在调用堆栈为空后，事件循环才会开始发挥作用。</p></li></ul><h2 id="事件循环中-执行顺序遵循的一定规则" tabindex="-1"><a class="header-anchor" href="#事件循环中-执行顺序遵循的一定规则" aria-hidden="true">#</a> 事件循环中，执行顺序遵循的一定规则</h2><figure><img src="'+o+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><ul><li><p>微任务队列中，nextTick的队列优先级大于promise队列</p></li><li><p>进行一次循环前，会优先执行微任务队列。且每个阶段完成后也会执行微任务队列</p></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',10),m={href:"https://www.builder.io/blog/visual-guide-to-nodejs-event-loop",target:"_blank",rel:"noopener noreferrer"};function h(p,b){const i=a("ExternalLinkIcon");return l(),s("div",null,[v,e("ol",null,[e("li",null,[e("a",m,[d("A Complete Visual Guide to Understanding the Node.js Event Loop"),r(i)])])])])}const _=n(u,[["render",h],["__file","Event Loop.html.vue"]]);export{_ as default};
