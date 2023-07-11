import{_ as v,r,o,c,b as e,d as n,a as i,w as l,f as h,F as p,g,t as _,e as a}from"./app-8e78aa60.js";const b={},f=e("h1",{id:"markdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),n(" Markdown")],-1),k={href:"https://commonmark.org/help/",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"语法扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#语法扩展","aria-hidden":"true"},"#"),n(" 语法扩展")],-1),x={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,"本章节将会介绍 VuePress 内置支持的 Markdown 语法扩展。",-1),E=e("h3",{id:"内置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#内置","aria-hidden":"true"},"#"),n(" 内置")],-1),L=e("p",null,"由 markdown-it 内置支持：",-1),V={href:"https://help.github.com/articles/organizing-information-with-tables/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text",target:"_blank",rel:"noopener noreferrer"},J=e("h3",{id:"标题锚点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#标题锚点","aria-hidden":"true"},"#"),n(" 标题锚点")],-1),q=e("p",null,[n("你可能已经注意到，当你把鼠标放在各个章节的标题上时，会显示出一个 "),e("code",null,"#"),n(" 锚点。点击这个 "),e("code",null,"#"),n(" 锚点，可以直接跳转到对应章节。")],-1),R={class:"custom-container tip"},P=e("p",{class:"custom-container-title"},"提示",-1),z={href:"https://github.com/valeriangalliat/markdown-it-anchor",target:"_blank",rel:"noopener noreferrer"},A=e("h3",{id:"链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#链接","aria-hidden":"true"},"#"),n(" 链接")],-1),B={href:"https://spec.commonmark.org/0.29/#link-reference-definitions",target:"_blank",rel:"noopener noreferrer"},y=a(`<p>以我们文档的源文件为例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>└─ docs
   └─ zh
      ├─ guide
      │  ├─ getting-started.md
      │  ├─ markdown.md    # &lt;- 我们在这里
      │  └─ README.md
      ├─ reference
      │  └─ config.md
      └─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>原始 Markdown</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;!-- 相对路径 --&gt;
[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)  
&lt;!-- 绝对路径 --&gt;
[指南](/zh/guide/README.md)  
[配置参考 &gt; markdown.links](/zh/reference/config.md#links)  
&lt;!-- URL --&gt;
[GitHub](https://github.com) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>转换为</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;RouterLink to=&quot;/zh/&quot;&gt;首页&lt;/RouterLink&gt;
  &lt;RouterLink to=&quot;/zh/reference/config.html&quot;&gt;配置参考&lt;/RouterLink&gt;
  &lt;RouterLink to=&quot;/zh/guide/getting-started.html&quot;&gt;快速上手&lt;/RouterLink&gt;
  &lt;RouterLink to=&quot;/zh/guide/&quot;&gt;指南&lt;/RouterLink&gt;
  &lt;RouterLink to=&quot;/zh/reference/config.html#links&quot;&gt;配置参考 &amp;gt; markdown.links&lt;/RouterLink&gt;
  &lt;a href=&quot;https://github.com&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;&gt;GitHub&lt;/a&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>渲染为</strong></p>`,7),C=e("br",null,null,-1),H=e("br",null,null,-1),D=e("br",null,null,-1),F=e("br",null,null,-1),S=e("br",null,null,-1),N={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},U=e("p",null,[e("strong",null,"解释")],-1),O=e("li",null,[n("内部链接会被转换为 "),e("code",null,"<RouterLink>"),n(" 以便进行 SPA 导航。")],-1),G=e("code",null,".md",-1),I=e("li",null,[n("外部链接会被添加 "),e("code",null,'target="_blank" rel="noopener noreferrer"'),n(" 属性。")],-1),W=e("p",null,[e("strong",null,"建议")],-1),X=e("p",null,"对于指向内部 Markdown 文件的链接，尽可能使用相对路径而不是绝对路径。",-1),K=e("ul",null,[e("li",null,"相对路径是指向目标文件的有效链接，在你的编辑器或者代码仓库中浏览源文件时也可以正确跳转。"),e("li",null,"相对路径在不同 locales 下都是一致的，这样在翻译你的内容时就不需要修改 locale 路径了。")],-1),Q={class:"custom-container tip"},Y=e("p",{class:"custom-container-title"},"提示",-1),Z=e("p",null,"链接扩展是由我们的内置插件支持的。",-1),$=e("h3",{id:"emoji",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#emoji","aria-hidden":"true"},"#"),n(" Emoji 🎉")],-1),ee=e("p",null,[n("你可以在你的 Markdown 内容中输入 "),e("code",null,":EMOJICODE:"),n(" 来添加 Emoji 表情。")],-1),ne={href:"https://github.com/ikatyang/emoji-cheat-sheet",target:"_blank",rel:"noopener noreferrer"},ie=e("p",null,[e("strong",null,"输入")],-1),le=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,`VuePress 2 已经发布 :tada: ！
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),se=e("p",null,[e("strong",null,"输出")],-1),te=e("p",null,"VuePress 2 已经发布 🎉 ！",-1),de={class:"custom-container tip"},ae=e("p",{class:"custom-container-title"},"提示",-1),re={href:"https://github.com/markdown-it/markdown-it-emoji",target:"_blank",rel:"noopener noreferrer"},oe=a(`<h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h3><p>如果你想要把当前页面的目录添加到 Markdown 内容中，你可以使用 <code>[[toc]]</code> 语法。</p><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>[[toc]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>输出</strong></p>`,5),ce={class:"table-of-contents"},ue=e("p",null,[n("目录中的标题将会链接到对应的 "),e("a",{href:"#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9"},"标题锚点"),n("，因此如果你禁用了标题锚点，可能会影响目录的功能。")],-1),me={class:"custom-container tip"},ve=e("p",{class:"custom-container-title"},"提示",-1),he={href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc",target:"_blank",rel:"noopener noreferrer"},pe=a(`<h3 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h3><p>下列代码块扩展是在 Node 端进行 Markdown 解析的时候实现的。这意味着代码块并不会在客户端被处理。</p><h4 id="行高亮" tabindex="-1"><a class="header-anchor" href="#行高亮" aria-hidden="true">#</a> 行高亮</h4><p>你可以在代码块添加行数范围标记，来为对应代码行进行高亮：</p><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>\`\`\`ts{1,6-8}
import { defaultTheme, defineUserConfig } from &#39;vuepress&#39;

export default defineUserConfig({
  title: &#39;你好， VuePress&#39;,

  theme: defaultTheme({
    logo: &#39;https://vuejs.org/images/logo.png&#39;,
  }),
})
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defaultTheme, defineUserConfig } from &#39;vuepress&#39;

export default defineUserConfig({
  title: &#39;你好， VuePress&#39;,

  theme: defaultTheme({
    logo: &#39;https://vuejs.org/images/logo.png&#39;,
  }),
})
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>行数范围标记的例子：</p><ul><li>行数范围： <code>{5-8}</code></li><li>多个单行： <code>{4,7,9}</code></li><li>组合： <code>{4,7-13,16,23-27,40}</code></li></ul>`,10),ge={class:"custom-container tip"},_e=e("p",{class:"custom-container-title"},"提示",-1),be={href:"https://github.com/egoist/markdown-it-highlight-lines",target:"_blank",rel:"noopener noreferrer"},fe=a(`<h4 id="行号" tabindex="-1"><a class="header-anchor" href="#行号" aria-hidden="true">#</a> 行号</h4><p>你肯定已经注意到在代码块的最左侧会展示行号。这个功能是默认启用的，你可以通过配置来禁用它。</p><p>你可以在代码块添加 <code>:line-numbers</code> / <code>:no-line-numbers</code> 标记来覆盖配置项中的设置。</p><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>\`\`\`ts
// 行号默认是启用的
const line2 = &#39;This is line 2&#39;
const line3 = &#39;This is line 3&#39;
\`\`\`

\`\`\`ts:no-line-numbers
// 行号被禁用
const line2 = &#39;This is line 2&#39;
const line3 = &#39;This is line 3&#39;
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 行号默认是启用的
const line2 = &#39;This is line 2&#39;
const line3 = &#39;This is line 3&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>// 行号被禁用
const line2 = &#39;This is line 2&#39;
const line3 = &#39;This is line 3&#39;
</code></pre></div>`,8),ke={class:"custom-container tip"},we=e("p",{class:"custom-container-title"},"提示",-1),xe=e("p",null,"行号扩展是由我们的内置插件支持的。",-1),Me=e("h4",{id:"添加-v-pre",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#添加-v-pre","aria-hidden":"true"},"#"),n(" 添加 v-pre")],-1),je=e("p",null,[n("由于 "),e("a",{href:"#%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95"},"模板语法可以在 Markdown 中使用"),n("，它也同样可以在代码块中生效。")],-1),Ee={href:"https://v3.vuejs.org/api/directives.html#v-pre",target:"_blank",rel:"noopener noreferrer"},Le=a('<p>你可以在代码块添加 <code>:v-pre</code> / <code>:no-v-pre</code> 标记来覆盖配置项中的设置。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>模板语法的字符有可能会被语法高亮器解析，比如 &quot;Mustache&quot; 语法（即双花括号）。因此，就像下面的例子一样，在某些语言中 <code>:no-v-pre</code> 可能并不能生效。</p><p>如果你无论如何都想在这种语言中使用 Vue 语法，你可以尝试禁用默认的语法高亮，然后在客户端实现你的自定义代码高亮。</p></div><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>```md\n&lt;!-- 默认情况下，这里会被保持原样 --&gt;\n1 + 2 + 3 = {{ 1 + 2 + 3 }}\n```\n\n```md:no-v-pre\n&lt;!-- 这里会被 Vue 编译 --&gt;\n1 + 2 + 3 = {{ 1 + 2 + 3 }}\n```\n\n```js:no-v-pre\n// 由于 JS 代码高亮，这里不会被正确编译\nconst onePlusTwoPlusThree = {{ 1 + 2 + 3 }}\n```\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;!-- 默认情况下，这里会被保持原样 --&gt;\n1 + 2 + 3 = {{ 1 + 2 + 3 }}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;!-- 这里会被 Vue 编译 --&gt;\n1 + 2 + 3 = 6\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',7),Ve=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Te={class:"custom-container tip"},Je=e("p",{class:"custom-container-title"},"提示",-1),qe=e("p",null,"v-pre 扩展是由我们的内置插件支持的。",-1),Re=a(`<h3 id="导入代码块" tabindex="-1"><a class="header-anchor" href="#导入代码块" aria-hidden="true">#</a> 导入代码块</h3><p>你可以使用下面的语法，从文件中导入代码块：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;!-- 最简单的语法 --&gt;
@[code](../foo.js)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你只想导入这个文件的一部分：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;!-- 仅导入第 1 行至第 10 行 --&gt;
@[code{1-10}](../foo.js)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>代码语言会根据文件扩展名进行推断，但我们建议你显式指定：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;!-- 指定代码语言 --&gt;
@[code js](../foo.js)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，<code>[]</code> 内的第二部分会被作为代码块标记来处理，因此在上面 <a href="#%E4%BB%A3%E7%A0%81%E5%9D%97">代码块</a> 章节中提到的语法在这里都可以支持：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;!-- 行高亮 --&gt;
@[code js{2,4-5}](../foo.js)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个复杂的例子：</p><ul><li>导入 <code>&#39;../foo.js&#39;</code> 文件的第 3 行至第 10 行</li><li>指定语言为 <code>&#39;js&#39;</code></li><li>对导入代码的第 3 行进行高亮，即 <code>&#39;../foo.js&#39;</code> 文件的第 5 行</li><li>禁用行号</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@[code{3-10} js{3}:no-line-numbers](../foo.js)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，路径别名在导入代码语法中不会生效。你可以通过下面的配置来自行处理路径别名：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export default {
  markdown: {
    importCode: {
      handleImportPath: (str) =&gt;
        str.replace(/^@src/, path.resolve(__dirname, &#39;path/to/src&#39;)),
    },
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;!-- 会被解析至 &#39;path/to/src/foo.js&#39; --&gt;
@[code](@src/foo.js)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,15),Pe={class:"custom-container tip"},ze=e("p",{class:"custom-container-title"},"提示",-1),Ae=e("p",null,"导入代码扩展是由我们的内置插件支持的。",-1),Be=e("h2",{id:"在-markdown-中使用-vue",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在-markdown-中使用-vue","aria-hidden":"true"},"#"),n(" 在 Markdown 中使用 Vue")],-1),ye=e("p",null,"这一章节会介绍 Vue 在 Markdown 中一些基本用法。",-1),Ce=e("h3",{id:"模板语法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#模板语法","aria-hidden":"true"},"#"),n(" 模板语法")],-1),He=e("p",null,"我们知道：",-1),De=e("ul",null,[e("li",null,"Markdown 中允许使用 HTML。"),e("li",null,"Vue 模板语法是和 HTML 兼容的。")],-1),Fe={href:"https://v3.vuejs.org/guide/template-syntax.html",target:"_blank",rel:"noopener noreferrer"},Se=a(`<p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>一加一等于： {{ 1 + 1 }}

&lt;span v-for=&quot;i in 3&quot;&gt; span: {{ i }} &lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><p>一加一等于： 2</p>`,4),Ne=a('<h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3><p>你可以在 Markdown 中直接使用 Vue 组件。</p><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>这是默认主题内置的 `&lt;Badge /&gt;` 组件 &lt;Badge text=&quot;演示&quot; /&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>输出</strong></p>',5),Ue=e("code",null,"<Badge />",-1),Oe={class:"custom-container tip"},Ge=e("p",{class:"custom-container-title"},"提示",-1),Ie=e("h2",{id:"注意事项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#注意事项","aria-hidden":"true"},"#"),n(" 注意事项")],-1),We=e("h3",{id:"非标准的-html-标签",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#非标准的-html-标签","aria-hidden":"true"},"#"),n(" 非标准的 HTML 标签")],-1),Xe=e("p",null,"非标准的 HTML 标签不会被 Vue 模板编译器识别成原生 HTML 标签。相反，Vue 会尝试将这些标签解析为 Vue 组件，而显然这些组件通常是不存在的。 例如：",-1),Ke={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center",target:"_blank",rel:"noopener noreferrer"},Qe={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font",target:"_blank",rel:"noopener noreferrer"},Ye={href:"https://developer.mozilla.org/zh-CN/docs/Web/MathML",target:"_blank",rel:"noopener noreferrer"},Ze=e("p",null,"如果你无论如何都要使用这些标签的话，可以尝试下面两种方法之一：",-1),$e={href:"https://v3.cn.vuejs.org/api/directives.html#v-pre",target:"_blank",rel:"noopener noreferrer"},en={href:"https://v3.vuejs.org/api/application-config.html#compileroptions",target:"_blank",rel:"noopener noreferrer"},nn=e("code",null,"@bundler-webpack",-1),ln=e("code",null,"@bundler-vite",-1);function sn(tn,dn){const t=r("ExternalLinkIcon"),s=r("RouterLink"),d=r("router-link"),u=r("Badge");return o(),c("div",null,[f,e("p",null,[n("在阅读本章节之前，请确保你已经对 Markdown 有所了解。如果你还不了解 Markdown ，请先学习一些 "),e("a",k,[n("Markdown 教程"),i(t)]),n("。")]),w,e("p",null,[n("VuePress 会使用 "),e("a",x,[n("markdown-it"),i(t)]),n(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),e("a",M,[n("语法扩展"),i(t)]),n(" 。")]),j,e("p",null,[n("你也可以通过 "),i(s,{to:"/Java/reference/config.html#markdown"},{default:l(()=>[n("markdown")]),_:1}),n(" 和 "),i(s,{to:"/Java/reference/plugin-api.html#extendsmarkdown"},{default:l(()=>[n("extendsMarkdown")]),_:1}),n(" 来配置这些内置扩展、加载更多 markdown-it 插件、实现你自己的扩展等。")]),E,L,e("ul",null,[e("li",null,[e("a",V,[n("表格"),i(t)]),n(" (GFM)")]),e("li",null,[e("a",T,[n("删除线"),i(t)]),n(" (GFM)")])]),J,q,e("div",R,[P,e("p",null,[n("标题锚点扩展由 "),e("a",z,[n("markdown-it-anchor"),i(t)]),n(" 支持。")]),e("p",null,[n("配置参考： "),i(s,{to:"/Java/reference/config.html#markdown-anchor"},{default:l(()=>[n("markdown.anchor")]),_:1})])]),A,e("p",null,[n("在你使用 Markdown 的 "),e("a",B,[n("链接语法"),i(t)]),n(" 时， VuePress 会为你进行一些转换。")]),y,e("p",null,[i(s,{to:"/Java/"},{default:l(()=>[n("首页")]),_:1}),C,i(s,{to:"/Java/reference/config.html"},{default:l(()=>[n("配置参考")]),_:1}),H,i(s,{to:"/Java/guide/getting-started.html"},{default:l(()=>[n("快速上手")]),_:1}),D,i(s,{to:"/zh/guide/"},{default:l(()=>[n("指南")]),_:1}),F,i(s,{to:"/zh/reference/config.html#links"},{default:l(()=>[n("配置参考 > markdown.links")]),_:1}),S,e("a",N,[n("GitHub"),i(t)])]),U,e("ul",null,[O,e("li",null,[n("指向 "),G,n(" 文件的内部链接会被转换为目标页面的 "),i(s,{to:"/Java/guide/page.html#%E8%B7%AF%E7%94%B1"},{default:l(()=>[n("路由路径")]),_:1}),n("，并且支持绝对路径和相对路径。")]),I]),W,X,K,e("div",Q,[Y,Z,e("p",null,[n("配置参考： "),i(s,{to:"/Java/reference/config.html#markdown-links"},{default:l(()=>[n("markdown.links")]),_:1})])]),$,ee,e("p",null,[n("前往 "),e("a",ne,[n("emoji-cheat-sheet"),i(t)]),n(" 来查看所有可用的 Emoji 表情和对应代码。")]),ie,le,se,te,e("div",de,[ae,e("p",null,[n("Emoji 扩展由 "),e("a",re,[n("markdown-it-emoji"),i(t)]),n(" 支持。")]),e("p",null,[n("配置参考： "),i(s,{to:"/Java/reference/config.html#markdown-emoji"},{default:l(()=>[n("markdown.emoji")]),_:1})])]),oe,e("nav",ce,[e("ul",null,[e("li",null,[i(d,{to:"#语法扩展"},{default:l(()=>[n("语法扩展")]),_:1}),e("ul",null,[e("li",null,[i(d,{to:"#内置"},{default:l(()=>[n("内置")]),_:1})]),e("li",null,[i(d,{to:"#标题锚点"},{default:l(()=>[n("标题锚点")]),_:1})]),e("li",null,[i(d,{to:"#链接"},{default:l(()=>[n("链接")]),_:1})]),e("li",null,[i(d,{to:"#emoji"},{default:l(()=>[n("Emoji 🎉")]),_:1})]),e("li",null,[i(d,{to:"#目录"},{default:l(()=>[n("目录")]),_:1})]),e("li",null,[i(d,{to:"#代码块"},{default:l(()=>[n("代码块")]),_:1})]),e("li",null,[i(d,{to:"#导入代码块"},{default:l(()=>[n("导入代码块")]),_:1})])])]),e("li",null,[i(d,{to:"#在-markdown-中使用-vue"},{default:l(()=>[n("在 Markdown 中使用 Vue")]),_:1}),e("ul",null,[e("li",null,[i(d,{to:"#模板语法"},{default:l(()=>[n("模板语法")]),_:1})]),e("li",null,[i(d,{to:"#组件"},{default:l(()=>[n("组件")]),_:1})])])]),e("li",null,[i(d,{to:"#注意事项"},{default:l(()=>[n("注意事项")]),_:1}),e("ul",null,[e("li",null,[i(d,{to:"#非标准的-html-标签"},{default:l(()=>[n("非标准的 HTML 标签")]),_:1})])])])])]),ue,e("div",me,[ve,e("p",null,[n("目录扩展由 "),e("a",he,[n("@mdit-vue/plugin-toc"),i(t)]),n(" 支持。")]),e("p",null,[n("配置参考： "),i(s,{to:"/Java/reference/config.html#markdown-toc"},{default:l(()=>[n("markdown.toc")]),_:1})])]),pe,e("div",ge,[_e,e("p",null,[n("行高亮扩展是由我们的内置插件支持的，该扩展 Fork 并修改自 "),e("a",be,[n("markdown-it-highlight-lines"),i(t)]),n("。")]),e("p",null,[n("配置参考： "),i(s,{to:"/Java/reference/config.html#markdown-code-highlightlines"},{default:l(()=>[n("markdown.code.highlightLines")]),_:1})])]),fe,e("div",ke,[we,xe,e("p",null,[n("配置参考： "),i(s,{to:"/Java/reference/config.html#markdown-code-linenumbers"},{default:l(()=>[n("markdown.code.lineNumbers")]),_:1})])]),Me,je,e("p",null,[n("为了避免你的代码块被 Vue 编译， VuePress 默认会在你的代码块添加 "),e("a",Ee,[n("v-pre"),i(t)]),n(" 指令。这一默认行为可以在配置中关闭。")]),Le,h(`
在 JS 代码块上使用 :no-v-pre 的话，会在使用 shiki 时遇到一些潜在的问题，所以这里
我们实际上没有使用 :no-v-pre ，只是作为一个错误用法的示例。
`),Ve,e("div",Te,[Je,qe,e("p",null,[n("配置参考： "),i(s,{to:"/Java/reference/config.html#markdown-code-vpre-block"},{default:l(()=>[n("markdown.code.vPre.block")]),_:1})])]),Re,e("div",Pe,[ze,Ae,e("p",null,[n("配置参考： "),i(s,{to:"/Java/reference/config.html#markdown-importcode"},{default:l(()=>[n("markdown.importCode")]),_:1})])]),Be,ye,e("p",null,[n("可以前往 "),i(s,{to:"/Java/advanced/cookbook/markdown-and-vue-sfc.html"},{default:l(()=>[n("Cookbook > Markdown 和 Vue SFC")]),_:1}),n(" 来了解更多内容。")]),Ce,He,De,e("p",null,[n("这意味着， Markdown 中允许直接使用 "),e("a",Fe,[n("Vue 模板语法"),i(t)]),n("。")]),Se,e("p",null,[(o(),c(p,null,g(3,m=>e("span",null," span: "+_(m),1)),64))]),Ne,e("p",null,[n("这是默认主题内置的 "),Ue,n(" 组件 "),i(u,{text:"演示"})]),e("div",Oe,[Ge,e("p",null,[n("前往 "),i(s,{to:"/Java/reference/components.html"},{default:l(()=>[n("内置组件")]),_:1}),n(" 查看所有内置组件。")]),e("p",null,[n("前往 "),i(s,{to:"/Java/reference/default-theme/components.html"},{default:l(()=>[n("默认主题 > 内置组件")]),_:1}),n(" 查看默认主题中的所有内置组件。")])]),Ie,We,Xe,e("ul",null,[e("li",null,[n("已废弃的 HTML 标签，比如 "),e("a",Ke,[n("<center>"),i(t)]),n(" 和 "),e("a",Qe,[n("<font>"),i(t)]),n(" 等。")]),e("li",null,[e("a",Ye,[n("MathML 标签"),i(t)]),n("，它们可能会被一些 markdown-it 的 LaTeX 插件用到。")])]),Ze,e("ul",null,[e("li",null,[n("添加一个 "),e("a",$e,[n("v-pre"),i(t)]),n(" 指令来跳过这个元素和它的子元素的编译过程。注意所有的模板语法也都会失效。")]),e("li",null,[n("设置 "),e("a",en,[n("compilerOptions.isCustomElement"),i(t)]),n(" 来告诉 Vue 模板编译器不要尝试作为组件来解析它们。 "),e("ul",null,[e("li",null,[n("对于 "),nn,n(" ，设置 "),i(s,{to:"/Java/reference/bundler/webpack.html#vue"},{default:l(()=>[n("vue.compilerOptions")]),_:1})]),e("li",null,[n("对于 "),ln,n(" ，设置 "),i(s,{to:"/Java/reference/bundler/vite.html#vuepluginoptions"},{default:l(()=>[n("vuePluginOptions.template.compilerOptions")]),_:1})])])])])])}const rn=v(b,[["render",sn],["__file","markdown.html.vue"]]);export{rn as default};