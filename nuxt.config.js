export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.GITHUB_USERNAME,
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Let's build some software, Like a bantha xD. Another blog about software, tech and nerdyness. German and English content. Enjoy your stay."},
      { name: 'format-detection', content: 'telephone=no' },
      /* Open-Graph */
      {hid: "og:type", name: "og:type", content: "website"},
      {hid: "og:site_name", name: "og:site_name", content: "Vuong Ngo"},
      {hid: "og:description", name: "og:description", content: "Let's build some software, Like a bantha xD. Another blog about software, tech and nerdyness. German and English content. Enjoy your stay."},
      {hid: "og:image", name: "og:image", content: '/favicon.ico'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [],

  plugins: [
    "@/plugins/util",
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'vue-notion/nuxt',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/google-analytics'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

  build: {},
  colorMode: {
    classSuffix: ''
  },

  optimizedImages: {
    optimizeImages: true
  },

  // Sitemap Configuration: https://sitemap.nuxtjs.org/usage/sitemap-options#from-a-function-which-returns-a-promise
  sitemap: {
    hostname: process.env.BASE_URL,
    routes: async () => {
      const notion = require('vue-notion')
      const pageTable = await notion.getPageTable(process.env.NOTION_TABLE_ID)
      // console.log(pageTable)
      return pageTable.filter((item) => !!item.public).map((item) => `/posts/${item.slug}`)
    }
  },

  // Google Analytics Configuration: https://google-analytics.nuxtjs.org
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    githubUsername: "pandawan91",
    notionTableId: process.env.NOTION_TABLE_ID,
    notionAboutPageId: process.env.NOTION_ABOUT_PAGE_ID,
    devName: "Vuong",
    devDescription: "Let's build some software, Like a bantha xD. Another blog about software, tech and nerdyness. German and English content. Enjoy your stay.",
    devRole: "DevOps Engineer",
    devGithubLink: "https://github.com/pandawan91",
    devLinkedinLink: "https://www.linkedin.com/in/vuongngo-/",
    devLogo: "Vuong Ngo",
  },
}
