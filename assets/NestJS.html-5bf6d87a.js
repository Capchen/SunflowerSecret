import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as s,b as r,d as t,e as i,a as n}from"./app-8be4d020.js";const p="/SunflowerSecret/assets/mvc-a9412dc6.webp",c="/SunflowerSecret/assets/AOP-7946f7ed.webp",h={},u={href:"https://docs.nestjs.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"http://nestjs.inode.club/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://nest.nodejs.cn/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://juejin.cn/post/7125066863150628900?searchId=2024011118224195363138895777B5DE8C",target:"_blank",rel:"noopener noreferrer"};function b(x,e){const a=l("ExternalLinkIcon");return d(),s("div",null,[e[4]||(e[4]=r("h2",{id:"一些文档",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#一些文档","aria-hidden":"true"},"#"),t(" 一些文档")],-1)),r("ul",null,[r("li",null,[r("a",u,[e[0]||(e[0]=t("官方文档")),i(a)])]),r("li",null,[r("a",f,[e[1]||(e[1]=t("翻译文档")),i(a)])]),r("li",null,[r("a",m,[e[2]||(e[2]=t("翻译文档")),i(a)])])]),e[5]||(e[5]=n('<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><h3 id="mvc" tabindex="-1"><a class="header-anchor" href="#mvc" aria-hidden="true">#</a> MVC</h3><figure><img src="'+p+'" alt="mvc" tabindex="0" loading="lazy"><figcaption>mvc</figcaption></figure><h3 id="ioc" tabindex="-1"><a class="header-anchor" href="#ioc" aria-hidden="true">#</a> IOC</h3><p>依赖自动注入，不需要手动处理依赖关系及注入操作，一切都是根据装饰器声明自动扫描并创建注入。</p><p>那么nest是如何实现IoC的呢 --- Reflect MetaData</p>',6)),r("p",null,[r("a",g,[e[3]||(e[3]=t("Nest 的实现原理？理解了 reflect metadata 就懂了")),i(a)])]),e[6]||(e[6]=n('<blockquote><p>Nest 的 Controller、Module、Service 等等所有的装饰器都是通过 Reflect.meatdata 给类或对象添加元数据的，然后初始化的时候取出来做依赖的扫描，实例化后放到 IOC 容器里。实例化对象还需要构造器参数的类型，这个开启 ts 的 emitDecoratorMetadata 的编译选项之后， ts 就会自动添加一些元数据，也就是 design:type、design:paramtypes、design:returntype 这三个，分别代表被装饰的目标的类型、参数的类型、返回值的类型。</p></blockquote><h3 id="aop" tabindex="-1"><a class="header-anchor" href="#aop" aria-hidden="true">#</a> AOP</h3><figure><img src="'+c+'" alt="AOP" tabindex="0" loading="lazy"><figcaption>AOP</figcaption></figure><p>面向切面编程</p><ul><li>Middleware</li><li>Guard</li><li>Interceptor</li><li>Pipe</li><li>ExceptionFilter</li></ul><p>它们的调用顺序为：</p><p>Middleware -&gt; Guard -&gt; Interceptor -&gt; Pipe -&gt; ExceptionFilter</p><p>nest继承了express的概念，所以最外层会调用Middleware，<br> 进入具体路由之后，接着调用Guard，例如权限判断，然后会调用Interceptor拦截器<br> 完成之后，调用Pipe对参数做处理，没问题后，才会进入Controller，然后匹配抛出的异常执行ExceptionFilter</p><h2 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h2><h3 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h3><p>TODO</p><h2 id="模块-modules" tabindex="-1"><a class="header-anchor" href="#模块-modules" aria-hidden="true">#</a> 模块（Modules）</h2><ul><li>模块的生命周期是怎样的</li><li>一个共享模块被修改值后，是否会影响到所有使用这个模块的其他模块</li><li>同一模块被导入，又被导出的意义是什么</li></ul>',13))])}const v=o(h,[["render",b],["__file","NestJS.html.vue"]]);export{v as default};