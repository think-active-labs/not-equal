import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseUrl: '/not-equal/',
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nixie+One',
        },
      ],
    },
  },
  target: 'static',
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
})
