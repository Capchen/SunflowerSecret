import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as p}from"./app-aed053b3.js";const t={},e=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 选择排序
 *  [3, 1, 4, 1, 5, 9]
 *  [1, 3, 4, 1, 5, 9]
 *  原理：一个min指针，一次循环找到最小值，和min互换位置，保证最左边是最小值
 */</span>
<span class="token keyword">function</span> <span class="token function">selectSort</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> min <span class="token operator">=</span> i
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                min <span class="token operator">=</span> j   <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nums
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 冒泡算法
 * 比较两两值，一次冒泡之后最右边的值肯定是为最大的
 * 第二次冒泡，就只要针对除去最后一个值的数值进行冒泡
 * [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]
 */</span>
<span class="token keyword">function</span> <span class="token function">bubble_one_time</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token operator">-</span>j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> element <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> temp
            temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span>
            arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp 
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">bubble_sort</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr <span class="token operator">=</span> <span class="token function">bubble_one_time</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 插入排序
 * 从原数组一个一个遍历，将其放到新数组，但要
 * 维持新数组的序列
 */</span>
<span class="token keyword">function</span> <span class="token function">insertSort</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> r<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">let</span> j <span class="token operator">=</span> i
            <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> l <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> temp <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
                j<span class="token operator">--</span>
            <span class="token punctuation">}</span>
            arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 快速排序
 * 是对冒泡排序的一种改进
 * 通过一趟排序将数据分为两部分，再对这两部分
 * 分别递归排序，以此类推
 * 双向的扫描比单项扫描快
 */</span>
<span class="token keyword">function</span> <span class="token function">quick_sort</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> e <span class="token operator">=</span> <span class="token function">quick_one_time</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token comment">// e 是一次快排的分界线，以此对左右两边再进行快排</span>
        <span class="token function">quick_sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> e<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token function">quick_sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> e<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>   
<span class="token keyword">function</span> <span class="token function">quick_one_time</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span>i<span class="token punctuation">,</span>j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// i 和 j是两个指针，初始的时候分别指向首尾</span>
    <span class="token comment">// 设定一个基准值 初始为 arr[0]</span>
    <span class="token keyword">let</span> pivot <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token comment">// 现在指针移动，</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> pivot <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
            j<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;</span> pivot <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 指针重叠，说明遍历完一次了</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> pivot
    <span class="token keyword">return</span> i
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * BFPRT算法，它和快速排序的区别仅仅是改变了pivot的取值
 * 快排中我们默认取首个为基准值
 * 在BFPRT算法中我们取五分中位数的中位数
 * 1. 将 n个元素划为 n/5 组，每组5个，至多只有一组由 n mod 5个元素组成。 
 * 2. 寻找这 n/5 个组中每一个组的中位数，这个过程可以用插入排序。 
 * 3. 对步骤2中的 n/5 个中位数，重复步骤1和步骤2，递归下去，直到剩下一个数字。
 * 4. 最终剩下的数字即为pivot，把大于它的数全放左边，小于等于它的数全放右边。 
 * 5. 判断pivot的位置与k的大小，有选择的对左边或右边递归。
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","冒泡，插入，快速排序.html.vue"]]);export{k as default};
