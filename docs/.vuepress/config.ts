import {defineUserConfig} from '@vuepress/cli'
import {defaultTheme} from '@vuepress/theme-default'

import {
    head,
    navbarZh,
    sidebarZh,
} from './configs/index.js'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({

    base: '/DocVuepress2/',
    lang: 'zh-CN',
    title: 'JavaDoc',
    description: '这是新的 JavaDoc1 11站点',

    // <head>中的额外标记
    head,

    // configure default theme
    theme: defaultTheme({
        logo: '/images/hero.png',
        repo: 'vuepress/vuepress-next',
        docsDir: 'docs',

        // navbar
        navbar: navbarZh,

        // sidebar
        sidebar: sidebarZh,

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',


        themePlugins: {
            // only enable git plugin in production mode
            git: isProd,
            // use shiki plugin in production mode instead
            prismjs: !isProd,
        },
    }),


})



