module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '简书项目',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '徐要芳的简书项目' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // 使用v-tooltip提示工具  ssr:禁止在服务端渲染
  plugins: [
    { src: '~/plugins/v-tooltip.min.js',ssr:false }
  ],
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css', '~/assets/css/normalize.css', '~/assets/css/animate.css', '~/assets/css/font-awesome.css', '~/assets/css/index.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
 
}
