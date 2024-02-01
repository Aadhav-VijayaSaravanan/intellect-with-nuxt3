// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            custom1: ['CustomFont1', 'sans-serif'],
            custom2: ['CustomFont2', 'serif'],
            custom3: ['CustomFont3', 'monospace'],
          },
        },
      },
    },
  }
})
