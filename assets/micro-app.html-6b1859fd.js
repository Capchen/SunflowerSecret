import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as i,b as n,d as r,e as p,a as l}from"./app-75d14cdb.js";const c="/SunflowerSecret/assets/micro-app-1439efe6.png",d={},u={href:"https://github.com/micro-zoe/micro-app/issues/8",target:"_blank",rel:"noopener noreferrer"};function h(m,a){const e=t("ExternalLinkIcon");return o(),i("div",null,[n("ul",null,[n("li",null,[n("a",u,[a[0]||(a[0]=r("micro-app介绍")),p(e)])])]),a[1]||(a[1]=l(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>需要微前端的背景，我们不再过多阐述，无非就是基于业务需求进行应用拆解，做到巨石应用的微应用化。</p><h2 id="micro-app的思考" tabindex="-1"><a class="header-anchor" href="#micro-app的思考" aria-hidden="true">#</a> micro-app的思考</h2><h3 id="为什么不使用qiankun" tabindex="-1"><a class="header-anchor" href="#为什么不使用qiankun" aria-hidden="true">#</a> 为什么不使用qiankun？</h3><p>qiankun是基于single-spa封装的微前端框架，几乎满足了所有微前端的使用场景，但是在某些方面还有一些不足。</p><ol><li>接入时对代码的侵入性，例如webpack配置修改（不支持vite），子应用的各种路由和隔离配置</li><li>多方应用接入的情况下，沙箱并不能规避所有问题。例如（子应用的依赖element版本不同导致的样式冲突）</li></ol><p>所以，像使用组件一样接入微前端成为了micro-app的实现思路</p><h2 id="micro-app的实现原理" tabindex="-1"><a class="header-anchor" href="#micro-app的实现原理" aria-hidden="true">#</a> micro-app的实现原理</h2><h3 id="类webcomponent-html-entry" tabindex="-1"><a class="header-anchor" href="#类webcomponent-html-entry" aria-hidden="true">#</a> 类WebComponent + HTML Entry</h3><blockquote><p>为什么是类WebComponent？而不使用原生的WebComponent。因为WebComponent中的ShadowDom的兼容性非常不好，一些前端框架在ShadowDom环境下无法正常运行，尤其是react框架，所以采用类WebComponent</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>题外话<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>

mdn文档中提到：

&gt; However, you should not consider this a strong security mechanism, because there are ways it can be evaded, for example by browser extensions running in the page. It&#39;s more of an indication that the page should not access the internals of your shadow DOM tree.

所以我们并不能把影子dom看成是一种强安全的隔离模式，更应该把它看成是一种浏览器的约定和机制。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类WebComponent的实现：</p><ol><li>元素隔离：效果和原生WebComponent一样，实现原理就是拦截原型链上元素的方法，保证子应用的操作都是在内部进行</li><li>js沙箱：通过Proxy代理子应用的的全局对象</li><li>样式隔离： 格式化处理style和link</li></ol><h3 id="预加载的实现" tabindex="-1"><a class="header-anchor" href="#预加载的实现" aria-hidden="true">#</a> 预加载的实现</h3><p>基于requestIdleCallback实现的预加载</p><h3 id="数据通信" tabindex="-1"><a class="header-anchor" href="#数据通信" aria-hidden="true">#</a> 数据通信</h3><p>由上文可知，micro-app的实现是自定义了一个<code>micro-app</code>标签，所以自然而然的，数据的通信就是通过组件属性进行。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>micro-app</span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{name: &#39;hello-world&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>micro-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但前提是需要让元素支持对象属性，所以<strong>重写了原型链上属性设置的方法</strong>，将对象的属性值保存到数据中心，通过数据中心分发给子应用。</p><h2 id="附一张对比图" tabindex="-1"><a class="header-anchor" href="#附一张对比图" aria-hidden="true">#</a> 附一张对比图</h2><figure><img src="`+c+'" alt="对比图" tabindex="0" loading="lazy"><figcaption>对比图</figcaption></figure>',21))])}const k=s(d,[["render",h],["__file","micro-app.html.vue"]]);export{k as default};