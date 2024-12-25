import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as s,a as r,b as i,d as t,e as o}from"./app-686b90b8.js";const c="/SunflowerSecret/assets/image-449197f6.png",u="/SunflowerSecret/assets/image-1-f003a0bc.png",v={},m={href:"https://www.builder.io/blog/visual-guide-to-nodejs-event-loop",target:"_blank",rel:"noopener noreferrer"};function p(b,e){const n=l("ExternalLinkIcon");return d(),s("div",null,[e[1]||(e[1]=r(`<h1 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h1><h2 id="官网简化图" tabindex="-1"><a class="header-anchor" href="#官网简化图" aria-hidden="true">#</a> 官网简化图</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   ┌───────────────────────────┐
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="概念理解" tabindex="-1"><a class="header-anchor" href="#概念理解" aria-hidden="true">#</a> 概念理解</h2><figure><img src="`+c+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><ul><li><p>事件循环在node服务启动的时候就会运行</p></li><li><p>node中的异步处理，是交给libuv来处理的</p></li><li><p>只有在调用堆栈为空后，事件循环才会开始发挥作用。</p></li></ul><h2 id="事件循环中-执行顺序遵循的一定规则" tabindex="-1"><a class="header-anchor" href="#事件循环中-执行顺序遵循的一定规则" aria-hidden="true">#</a> 事件循环中，执行顺序遵循的一定规则</h2><figure><img src="'+u+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><ul><li><p>微任务队列中，nextTick的队列优先级大于promise队列</p></li><li><p>进行一次循环前，会优先执行微任务队列。且每个阶段完成后也会执行微任务队列</p></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',10)),i("ol",null,[i("li",null,[i("a",m,[e[0]||(e[0]=t("A Complete Visual Guide to Understanding the Node.js Event Loop")),o(n)])])])])}const g=a(v,[["render",p],["__file","Event Loop.html.vue"]]);export{g as default};
