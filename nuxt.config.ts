// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            "rot": "#D77A61",
            "old": "#D8B4A0",
            "cad": "#DBD3D8",
            "whi": "#EFF1F3",
            "sch": "#223843"
          },
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
