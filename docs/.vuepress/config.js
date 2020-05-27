const pluginConf = require('./config/pluginConf.js');

module.exports = {
    title: 'yaoyaoBlog',
    description: 'Welcome to my home',
    base: "/yaoyaoBlog/",
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    plugins: pluginConf,
    theme: 'reco',
    themeConfig: {
        author: 'yaoyao',
        authorAvatar: '/cat.jpg',
        startYear: '2020',
        type: 'blog',
        nav: [
            { text: 'Home', link: '/' }
            // { text: 'search', link: 'https://google.com' },
            // { text: 'github', link: 'https://github.com/Wangyaoyo/MyProject', icon: 'reco-github' }
        ],
        sidebar: 'auto',
        sidebarDepth: 2,
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            },
            search: {
                location: 4,
                link: 'https://google.com'
            }
        }
    }
}