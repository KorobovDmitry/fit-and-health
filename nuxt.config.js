const pkg = require('./package')


module.exports = {
  // Настройки для локального доступа к проекту с мобильного (cmd ---> ipconfig)
  // server: {
  //   port: 3000, // default: 3000
  //   host: '192.168.1.222' // default: localhost
  // },

  telemetry: false,

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#6EB63B' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/reset.scss',
    '@/static/fonts/css/themify-icons.css',
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
