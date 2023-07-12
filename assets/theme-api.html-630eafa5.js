import{_ as s,r as t,o as u,c as r,a,b as e,d as l,w as n,e as o}from"./app-6ea6c10f.js";const p={},c=e("h1",{id:"主题-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#主题-api","aria-hidden":"true"},"#"),l(" 主题 API")],-1),h=o(`<h2 id="基础配置项" tabindex="-1"><a class="header-anchor" href="#基础配置项" aria-hidden="true">#</a> 基础配置项</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>主题的名称。</p><p>它应遵从如下命名约定，并且在发布到 NPM 时应确保和包名保持一致：</p><ul><li>非 Scoped: <code>vuepress-theme-foo</code></li><li>Scoped: <code>@org/vuepress-theme-foo</code></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3><ul><li><p>详情：</p><p>主题永远不能被多次使用，因此主题 API 不支持该配置项。</p></li></ul><h2 id="主题特定配置项" tabindex="-1"><a class="header-anchor" href="#主题特定配置项" aria-hidden="true">#</a> 主题特定配置项</h2><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3><ul><li><p>类型： <code>Theme</code></p></li><li><p>详情：</p><p>要继承的主题。</p><p>父主题的所有主题 API 都会被继承，但是子主题不会直接覆盖父主题。主题特定的配置项会根据以下规则进行覆盖：</p><ul><li><a href="#plugins">plugins</a>： 当同一个插件在子主题和父主题中都被使用时，如果该插件不支持被多次使用，那么只有在子主题中使用的插件会生效。</li><li><a href="#templatebuild">templateBuild</a> / <a href="#templatedev">templateDev</a>： 子主题的模板会覆盖父主题的模板。</li></ul><p>支持多级继承，即主题 B 可以继承主题 A ，然后主题 C 可以继承主题 B 。换句话说，一个主题可以有一个父主题、一个祖父主题等等。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defaultTheme } from &#39;@vuepress/theme-default&#39;
import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export default {
  // 继承默认主题
  extends: defaultTheme(),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3>`,10),m=e("li",null,[e("p",null,[l("类型： "),e("code",null,"(Plugin | Plugin[])[]")])],-1),_=e("li",null,[e("p",null,"详情："),e("p",null,"主题中要使用的插件。")],-1),v=e("p",null,"参考：",-1),f=e("h3",{id:"templatebuild",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuild","aria-hidden":"true"},"#"),l(" templateBuild")],-1),g=e("li",null,[e("p",null,[l("类型： "),e("code",null,"string")])],-1),b=e("p",null,"详情：",-1),x=e("p",null,"指定构建时使用的 HTML 模板。",-1),D=e("p",null,"参考：",-1),B=e("h3",{id:"templatedev",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatedev","aria-hidden":"true"},"#"),l(" templateDev")],-1),V=e("li",null,[e("p",null,[l("类型： "),e("code",null,"string")])],-1),P=e("p",null,"详情：",-1),A=e("p",null,"指定开发时使用的 HTML 模板。",-1),N=e("p",null,"参考：",-1);function J(T,k){const d=t("NpmBadge"),i=t("RouterLink");return u(),r("div",null,[c,a(d,{package:"@vuepress/core"}),e("p",null,[l("VuePress 主题同样是一个插件，因此主题 API 可以接收 "),a(i,{to:"/DocVuepress/Java/reference/plugin-api.html"},{default:n(()=>[l("插件 API")]),_:1}),l(" 的所有选项，但存在以下差别：")]),h,e("ul",null,[m,_,e("li",null,[v,e("ul",null,[e("li",null,[a(i,{to:"/DocVuepress/Java/reference/config.html#plugins"},{default:n(()=>[l("配置 > plugins")]),_:1})])])])]),f,e("ul",null,[g,e("li",null,[b,x,e("p",null,[l("它会覆盖 "),a(i,{to:"/DocVuepress/Java/reference/config.html#templatebuild"},{default:n(()=>[l("templateBuild")]),_:1}),l(" 的默认值，但是也会被用户配置覆盖。")])]),e("li",null,[D,e("ul",null,[e("li",null,[a(i,{to:"/DocVuepress/Java/reference/config.html#templatebuild"},{default:n(()=>[l("配置 > templateBuild")]),_:1})])])])]),B,e("ul",null,[V,e("li",null,[P,A,e("p",null,[l("它会覆盖 "),a(i,{to:"/DocVuepress/Java/reference/config.html#templatedev"},{default:n(()=>[l("templateDev")]),_:1}),l(" 的默认值，但是也会被用户配置覆盖。")])]),e("li",null,[N,e("ul",null,[e("li",null,[a(i,{to:"/DocVuepress/Java/reference/config.html#templatedev"},{default:n(()=>[l("配置 > templateDev")]),_:1})])])])])])}const L=s(p,[["render",J],["__file","theme-api.html.vue"]]);export{L as default};