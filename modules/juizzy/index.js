import { defineNuxtModule, createResolver, addServerHandler } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtModule({
  name: 'juizzy',
  hooks: {
    'components:dirs': (dirs) => {
      // Add ./components dir to the list
      dirs.push({
        path: resolve('./components'),
        prefix: 'juizzy'
      })
      
    }
  },
  setup () {
    // Add an API route
    addServerHandler({
      route: '/api/themes/juizzy/settings',
      handler: resolve('./runtime/settings.ts')
    })
  }
})