// https://nuxt.com/docs/api/configuration/nuxt-config
import { updateAlgolia } from "./modules/algolia-updater"
export default defineNuxtConfig({
  modules: ['@nuxt/content', ['@nuxtjs/algolia', {
    apiKey: process.env.ALGOLIA_SEARCH_ONLY_KEY,
    applicationId: process.env.ALGOLIA_APP_ID,
  }]
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  hooks: {
    'build:done': async () => {
      await updateAlgolia(process.env.ALGOLIA_CONTENT_MANAGEMENT_API_KEY!,
        process.env.ALGOLIA_INDEX!,
        process.env.ALGOLIA_APP_ID!,
        process.env.ALGOLIA_CONTENT_DIRECTORY!,
        process.env.ALGOLIA_UPDATE!)
    }
  }
})
