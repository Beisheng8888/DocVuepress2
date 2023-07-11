import type { NavbarConfig } from '@vuepress/theme-default'


export const navbarZh: NavbarConfig = [
  {
    text: '指南',
    link: '/目录.html',
  },


  {
    text: '了解更多',
    children: [
      {
        text: '深入',
        children: [
          '/zh/advanced/architecture.md',
          '/zh/advanced/plugin.md',
          '/zh/advanced/theme.md',
          {
            text: 'Cookbook',
            link: '/zh/advanced/cookbook/',
          },
        ],
      },
      {
        text: '其他资源',
        children: [
          '/zh/contributing.md',
          {
            text: 'Awesome VuePress',
            link: 'https://github.com/vuepress/awesome-vuepress',
          },
        ],
      },
    ],
  }


]
