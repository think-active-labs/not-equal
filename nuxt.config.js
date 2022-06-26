import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // app: {
  //   baseURL: '/not-equal/',
  // },
  target: 'static',
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  build: {},
})
