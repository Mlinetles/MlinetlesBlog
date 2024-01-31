module.exports = {
    title: 'MlinetlesBlog',
    description: 'MlinetlesHyper的博客网站（并不是）',
    themeConfig: {
        nav: [
            {
                text: '计划',
                link: '/projects/'
            }
        ],
        sidebar: {
            '/projects/': 'auto',
            '/': [
                ['', '首页'],
                ['/projects/', '计划']
            ]
        }
    }
}