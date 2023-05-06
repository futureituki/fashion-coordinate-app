// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  postcss: {
    plugins: { tailwindcss: {} },
  },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  plugins: ['@/plugins/fontawesome.ts'],
})
