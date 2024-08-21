import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,d as e}from"./app-ec378ad1.js";const l={},i=e(`<h3 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token comment">#查看目录下文件</span>
<span class="token function">ls</span> <span class="token parameter variable">-a</span> <span class="token comment">#查看隐藏文件</span>
<span class="token function">ls</span> <span class="token parameter variable">-F</span> <span class="token comment">#在文件夹后面加了／，在可执行文件后面加了*</span>
<span class="token function">ls</span> <span class="token parameter variable">-R</span> <span class="token comment">#递归遍历子文件夹</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token comment">#显示长列表形式的文件信息</span>


<span class="token function">touch</span> filename <span class="token comment"># 创建一个空文件</span>
<span class="token function">cp</span> <span class="token builtin class-name">source</span> destination <span class="token comment"># 将源文件复制成一个新文件并且以 destination命名</span>

<span class="token comment"># 制表键自动补全文件名</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="链接文件" tabindex="-1"><a class="header-anchor" href="#链接文件" aria-hidden="true">#</a> 链接文件</h4><p>如果需要在系统中维护同一文件的两份或者多分副本，除了保存多分单独的物理文件副本之外。还可以采用保存一份物理副本和多个虚拟副本的方法，这些虚拟副本被称为链接。链接是目录中指向文件真是位置的占位符。在linux中有两种不同类型的链接</p><h5 id="符号链接" tabindex="-1"><a class="header-anchor" href="#符号链接" aria-hidden="true">#</a> 符号链接</h5><p>符号链接就是一个实实在在的文件，它指向存放在虚拟目录结构中的某个地方的一个文件，这两个通过符号链接在一起的文件，彼此的内容并不相同</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> data_file rl_data_file 
<span class="token comment">#以data_file文件创建一个rl_data_file符号链接，注意rl_data_file只是个占位符</span>

<span class="token comment"># demo</span>
wangcc:chenjian oukawa$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> chenj rl_chenj
wangcc:chenjian oukawa$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> chenj
-rw-r--r--@ <span class="token number">1</span> oukawa  staff  <span class="token number">11</span> <span class="token number">10</span> <span class="token number">30</span> <span class="token number">22</span>:07 chenj
wangcc:chenjian oukawa$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> *chenj
-rw-r--r--@ <span class="token number">1</span> oukawa  staff  <span class="token number">11</span> <span class="token number">10</span> <span class="token number">30</span> <span class="token number">22</span>:07 chenj
lrwxr-xr-x  <span class="token number">1</span> oukawa  staff   <span class="token number">5</span> <span class="token number">10</span> <span class="token number">30</span> <span class="token number">22</span>:08 rl_chenj -<span class="token operator">&gt;</span> chenj
wangcc:chenjian oukawa$ <span class="token function">ls</span> <span class="token parameter variable">-i</span> *chenj
<span class="token number">8082497</span> chenj		<span class="token number">8082525</span> rl_chenj
wangcc:chenjian oukawa$ 


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="硬链接" tabindex="-1"><a class="header-anchor" href="#硬链接" aria-hidden="true">#</a> 硬链接</h5><p>硬链接会创建独立的虚拟文件，其中包含原始文件的信息及位置。引用硬链接文件等同于引用了原始文件。</p><blockquote><p>只能对处于同一存储媒体的文件创建硬链接，要想在不同的存储媒体之间创建链接，只能是软链接。</p></blockquote><h3 id="重命名文件" tabindex="-1"><a class="header-anchor" href="#重命名文件" aria-hidden="true">#</a> 重命名文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> fall fzll <span class="token comment"># 重命名文件称为移动 ，表示移动fall文件为fzll</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-i</span> fall <span class="token comment">#删除fall文件，并且会提示</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> fall <span class="token comment">#强制删除，不提示</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><h3 id="处理目录" tabindex="-1"><a class="header-anchor" href="#处理目录" aria-hidden="true">#</a> 处理目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> newDir <span class="token comment">#创建新目录</span>
<span class="token function">rmdir</span> newDir <span class="token comment">#删除空目录</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> newDir <span class="token comment">#全部删除，不提示</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看文件" tabindex="-1"><a class="header-anchor" href="#查看文件" aria-hidden="true">#</a> 查看文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">file</span> my_file <span class="token comment">#查看文件是什么类型</span>
<span class="token function">cat</span> <span class="token parameter variable">-n</span> test1 <span class="token comment">#查看文件并加上行号</span>
<span class="token comment">#cat的缺陷是一旦运行就无法控制后面的操作</span>
<span class="token function">more</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),c=[i];function r(t,d){return a(),s("div",null,c)}const m=n(l,[["render",r],["__file","基本的shell命令.html.vue"]]);export{m as default};
