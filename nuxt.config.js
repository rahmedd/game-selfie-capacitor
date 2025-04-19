const { URL } = require('url')

const title = 'GAMEBOY SELFIE'
const BASE_URL = 'http://localhost:3000/'
const description = 'Tap to snap!'

module.exports = () => ({
  mode: 'universal',
  render: {
    fallback: false
  },
  head: {
    title,
    meta: [
      { hid: 'og:url', property: 'og:url', content: BASE_URL },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:site_name', property: 'og:site_name', content: 'localhosted' },

      // description
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:description', property: 'og:description', content: description },
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Press+Start+2P' }
    ]
  },
  loading: false,
  manifest: {
    name: title,
    ogType: null,
    ogTitle: null,
    ogDescription: null,
    ogSiteName: null,
    description: null,
    display: 'standalone',
    theme_color: '#000',
    twitterSite: '@test',
    twitterCreator: '@test'
  },
  modules: [
    ['@nuxtjs/pwa', { icon: false }],
  ],
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
})