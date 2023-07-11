import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/Java/': [
    {
      text: 'Java基础',
      collapsible: true,
      children: [
        '/Java/my.md',
        '/Java/reference/cli.md',
        '/Java/reference/config.md',
        '/Java/reference/frontmatter.md',
        '/Java/reference/components.md',
        '/Java/reference/plugin-api.md',
        '/Java/reference/theme-api.md',
        '/Java/reference/client-api.md',
        '/Java/reference/node-api.md',
      ],
    },
    {
      text: '打包工具参考',
      collapsible: true,
      children: [
        '/Java/reference/bundler/vite.md',
        '/Java/reference/bundler/webpack.md',
      ],
    },
    {
      text: '默认主题参考',
      collapsible: true,
      children: [
        '/Java/reference/default-theme/config.md',
        '/Java/reference/default-theme/frontmatter.md',
        '/Java/reference/default-theme/components.md',
        '/Java/reference/default-theme/markdown.md',
        '/Java/reference/default-theme/styles.md',
        '/Java/reference/default-theme/extending.md',
      ],
    },
    {
      text: '官方插件参考',
      collapsible: true,
      children: [
        {
          text: '常用功能',
          children: [
            '/Java/reference/plugin/back-to-top.md',
            '/Java/reference/plugin/container.md',
            '/Java/reference/plugin/external-link-icon.md',
            '/Java/reference/plugin/google-analytics.md',
            '/Java/reference/plugin/medium-zoom.md',
            '/Java/reference/plugin/nprogress.md',
            '/Java/reference/plugin/register-components.md',
          ],
        },
        {
          text: '内容搜索',
          children: [
            '/Java/reference/plugin/docsearch.md',
            '/Java/reference/plugin/search.md',
          ],
        },
        {
          text: 'PWA',
          children: [
            '/Java/reference/plugin/pwa.md',
            '/Java/reference/plugin/pwa-popup.md',
          ],
        },
        {
          text: '语法高亮',
          children: [
            '/Java/reference/plugin/prismjs.md',
            '/Java/reference/plugin/shiki.md',
          ],
        },
        {
          text: '主题开发',
          children: [
            '/Java/reference/plugin/active-header-links.md',
            '/Java/reference/plugin/git.md',
            '/Java/reference/plugin/palette.md',
            '/Java/reference/plugin/theme-data.md',
            '/Java/reference/plugin/toc.md',
          ],
        },
      ],
    },
  ],
}
