import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as r,a as s,b as a,d as p,e as l}from"./app-75d14cdb.js";const c={},d={href:"https://graphql.org/code/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://confluence.gyenno.com/pages/viewpage.action?pageId=59247288",target:"_blank",rel:"noopener noreferrer"};function h(v,n){const e=i("ExternalLinkIcon");return o(),r("div",null,[n[2]||(n[2]=s('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>关键字：</p><ul><li>中台</li><li>聚合</li><li>按需</li></ul><p>解决服务端单一稳定与端的差异灵活诉求之间的矛盾</p><h2 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型" aria-hidden="true">#</a> 技术选型</h2><p>GraphQL: 图查询语言</p>',6)),a("p",null,[a("a",d,[n[0]||(n[0]=p("查看语言支持GraphQL")),l(e)])]),n[3]||(n[3]=s(`<ul><li>Client: Vue + Vue Apollo</li><li>Server: NestJS + Apollo Server</li></ul><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><h3 id="客户端实现demo" tabindex="-1"><a class="header-anchor" href="#客户端实现demo" aria-hidden="true">#</a> 客户端实现Demo</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
npm install <span class="token operator">--</span>save graphql graphql<span class="token operator">-</span>tag @apollo<span class="token operator">/</span>client

npm install <span class="token operator">--</span>save @vue<span class="token operator">/</span>apollo<span class="token operator">-</span>composable

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// graphql实例</span>
<span class="token keyword">const</span> httpLink <span class="token operator">=</span> <span class="token function">createHttpLink</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// You should use an absolute URL here</span>
  <span class="token literal-property property">uri</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000/graphql&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Cache implementation</span>
<span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InMemoryCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// Create the apollo client</span>
<span class="token keyword">const</span> apolloClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">link</span><span class="token operator">:</span> httpLink<span class="token punctuation">,</span>
  cache
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">provide</span><span class="token punctuation">(</span>DefaultApolloClient<span class="token punctuation">,</span> apolloClient<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务端实现demo" tabindex="-1"><a class="header-anchor" href="#服务端实现demo" aria-hidden="true">#</a> 服务端实现Demo</h3><h4 id="schema-fist-单个graphql-server" tabindex="-1"><a class="header-anchor" href="#schema-fist-单个graphql-server" aria-hidden="true">#</a> Schema fist（单个graphql-server）</h4><p>请看具体工程演示</p><h4 id="联邦模式-多个graphql-server" tabindex="-1"><a class="header-anchor" href="#联邦模式-多个graphql-server" aria-hidden="true">#</a> 联邦模式（多个graphql-server）</h4><p>基于apollo router的实现demo，请看具体工程演示</p><h3 id="bff概览" tabindex="-1"><a class="header-anchor" href="#bff概览" aria-hidden="true">#</a> BFF概览</h3>`,11)),a("p",null,[a("a",u,[n[1]||(n[1]=p("架构图概览")),l(e)])]),n[4]||(n[4]=s('<h2 id="需要进一步明确的问题" tabindex="-1"><a class="header-anchor" href="#需要进一步明确的问题" aria-hidden="true">#</a> 需要进一步明确的问题</h2><p>综上：</p><p>加入BFF一层，是后端与前端的解耦。不用GraphQL也能解决服务端单一稳定与端的差异灵活诉求之间的矛盾。</p><p>只是GraphQL天然支持，对前端更友好,但是对后端挑战也更大。</p><h3 id="技术架构问题" tabindex="-1"><a class="header-anchor" href="#技术架构问题" aria-hidden="true">#</a> 技术架构问题</h3><ul><li><p>前端BFF还是后端BFF</p></li><li><p>是不是可以不用graphQL</p></li><li><p>BFF内部结构如何梳理，单个BFF还是多个BFF</p></li><li><p>BFF与上下游的职责划分，规则定制</p></li></ul><h3 id="成本问题" tabindex="-1"><a class="header-anchor" href="#成本问题" aria-hidden="true">#</a> 成本问题</h3><ul><li><p>作为承接页面和接口的中间商，需要额外的人力投入维护迭代</p></li><li><p>需要额外的学习成本</p></li><li><p>会有一定的试错成本</p></li><li><p>团队人员流动的替代成本</p></li></ul><h3 id="落地收益问题" tabindex="-1"><a class="header-anchor" href="#落地收益问题" aria-hidden="true">#</a> 落地收益问题</h3><ul><li><p>当前能切入的业务点是什么？</p></li><li><p>前期可以预测到，需要double time的投入，后期的效率提升又该从哪些维度评估</p></li></ul>',10))])}const b=t(c,[["render",h],["__file","GraphQL-BFF.html.vue"]]);export{b as default};