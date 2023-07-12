import{_ as t,r as s,o,c as u,a,b as e,d as i,w as d,e as n}from"./app-c48a9718.js";const p={},h=e("h1",{id:"search",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#search","aria-hidden":"true"},"#"),i(" search")],-1),v=n(`<p>为你的文档网站提供本地搜索能力。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>当你正确配置该插件后，默认主题会把搜索框添加到导航栏。</p><p>该插件不一定能在其他主题中直接使用，因此你应参考主题本身的文档来获取更多信息。</p></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-search@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { searchPlugin } from &#39;@vuepress/plugin-search&#39;

export default {
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地搜索索引" tabindex="-1"><a class="header-anchor" href="#本地搜索索引" aria-hidden="true">#</a> 本地搜索索引</h2><p>该插件会根据你的页面，在本地生成搜索索引，然后在用户访问站点时加载搜索索引文件。换句话说，这是一个轻量级的内置搜索能力，不会进行任何外部请求。</p>`,7),m=n(`<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型： <code>Record&lt;string, { placeholder: string }&gt;</code></p></li><li><p>详情：</p><p>搜索框在不同 locales 下的文字。</p><p>如果没有指定该配置项，它会降级使用默认文字。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  plugins: [
    searchPlugin({
      locales: {
        &#39;/&#39;: {
          placeholder: &#39;Search&#39;,
        },
        &#39;/zh/&#39;: {
          placeholder: &#39;搜索&#39;,
        },
      },
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b=n('<h3 id="hotkeys" tabindex="-1"><a class="header-anchor" href="#hotkeys" aria-hidden="true">#</a> hotKeys</h3><ul><li>类型： <code>(string | HotKeyOptions)[]</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div>',3),g=e("li",null,[e("p",null,[i("默认值： "),e("code",null,"['s', '/']")])],-1),x=e("p",null,"详情：",-1),_={href:"http://keycode.info/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"当按下热键时，搜索框会被聚焦。",-1),y=e("p",null,"将该配置项设为空数组可以禁用热键功能。",-1),k=n(`<h3 id="maxsuggestions" tabindex="-1"><a class="header-anchor" href="#maxsuggestions" aria-hidden="true">#</a> maxSuggestions</h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>5</code></p></li><li><p>详情：</p><p>指定搜索结果的最大条数。</p></li></ul><h3 id="issearchable" tabindex="-1"><a class="header-anchor" href="#issearchable" aria-hidden="true">#</a> isSearchable</h3><ul><li><p>类型： <code>(page: Page) =&gt; boolean</code></p></li><li><p>默认值： <code>() =&gt; true</code></p></li><li><p>详情：</p><p>一个函数，用于判断一个页面是否应该被包含在搜索索引中。</p><ul><li>返回 <code>true</code> 来包含该页面。</li><li>返回 <code>false</code> 来排除该页面。</li></ul></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  plugins: [
    searchPlugin({
      // 排除首页
      isSearchable: (page) =&gt; page.path !== &#39;/&#39;,
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getextrafields" tabindex="-1"><a class="header-anchor" href="#getextrafields" aria-hidden="true">#</a> getExtraFields</h3><ul><li><p>类型： <code>(page: Page) =&gt; string[]</code></p></li><li><p>默认值： <code>() =&gt; []</code></p></li><li><p>详情：</p><p>一个函数，用于在页面的搜索索引中添加额外字段。</p><p>默认情况下，该插件会将页面标题和小标题作为搜索索引。该配置项可以帮助你添加更多的可搜索字段。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  plugins: [
    searchPlugin({
      // 允许搜索 Frontmatter 中的 \`tags\`
      getExtraFields: (page) =&gt; page.frontmatter.tags ?? [],
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>你可以通过 CSS 变量来自定义搜索框的样式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><h3 id="searchbox" tabindex="-1"><a class="header-anchor" href="#searchbox" aria-hidden="true">#</a> SearchBox</h3><ul><li><p>详情：</p><p>该插件会全局注册一个 <code>&lt;SearchBox /&gt;</code> 组件，你可以不传入任何 Props 来使用它。</p><p>将该组件放置在你想要显示搜索框的地方。例如，默认主题将这个组件放在了导航栏的末尾。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>该组件主要用于主题开发。在大多数情况下你不需要直接使用该组件。</p></div>`,15);function S(P,B){const r=s("NpmBadge"),l=s("RouterLink"),c=s("ExternalLinkIcon");return o(),u("div",null,[h,a(r,{package:"@vuepress/plugin-search"}),v,e("p",null,[i("然而，当你的站点包含大量页面时，搜索索引文件也会变得非常大，它可能会拖慢你的页面加载速度。在这种情况下，我们建议你使用更成熟的解决方案 - "),a(l,{to:"/Java/reference/plugin/docsearch.html"},{default:d(()=>[i("docsearch")]),_:1}),i(" 。")]),m,e("ul",null,[e("li",null,[i("参考： "),e("ul",null,[e("li",null,[a(l,{to:"/Java/guide/i18n.html"},{default:d(()=>[i("指南 > 多语言支持")]),_:1})])])])]),b,e("ul",null,[g,e("li",null,[x,e("p",null,[i("指定热键的 "),e("a",_,[i("event.key"),a(c)]),i(" 。")]),f,y])]),k])}const E=t(p,[["render",S],["__file","search.html.vue"]]);export{E as default};