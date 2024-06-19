// https://nuxt.com/docs/api/configuration/nuxt-config

import type { NuxtPage } from 'nuxt/schema'

export default defineNuxtConfig({
  // ssr: true,
  hooks: {
    'pages:extend' (pages) {
      function setMiddleware (pages: NuxtPage[]) {
        for (const page of pages) {
          page.meta ||= {}
          page.meta.middleware = ['theme']
        }
      }
      setMiddleware(pages)
    }
  },
  // devtools: { enabled: false },
  devServer: {
    // host: 'shop.src.test',
    // host: 'storefront.test',
    // port: 3000
  },
  modules: [
    '@nuxtjs/tailwindcss',
    "@/modules/base/ui",
    "@/modules/shared/ui",
    "@/modules/default/index",
    "@/modules/juizzy/index",
  ],
})