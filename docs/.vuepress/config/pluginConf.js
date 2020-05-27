module.exports = [
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ["blackCat"],
                clean: false,
                modelStyle: {
                    position: "fixed",
                    left: "0px",
                    bottom: "0px",
                    opacity: "0.9",
                    zIndex: 99999
                },
                messages: {
                    welcome: '欢迎来到 yaoyao blog',
                    home: '心里的花，我想要带你回家。',
                    theme: '好吧，希望你能喜欢我的其他小伙伴。',
                    close: '你知道我喜欢吃什么吗？痴痴地望着你。'
                },
                messageStyle: {
                    right: '68px',
                    bottom: '190px'
                }
            }
        ],
        [
            "@vuepress-reco/vuepress-plugin-back-to-top",
            {
                theme: ["back-to-top"],
                customStyle:{
                    right:'1rem',
                    bottom: '6rem',
                    width: '2.5rem',
                    height: '2.5rem',
                    'border-radius': '.25rem',
                    'line-height': '2.5rem',
                    backgroundColor: 'rgba(231, 234, 241,.5)'
                }
            }
        ],
         "@vuepress-reco/vuepress-plugin-pagation",
         "cursor-effects"
    ]
