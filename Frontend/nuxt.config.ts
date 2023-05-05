// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: { tailwindcss: {} },
  },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['@/plugins/fontawesome.ts'],
})
