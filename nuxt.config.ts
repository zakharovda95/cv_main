export default defineNuxtConfig({
  imports: {
    autoImport: true
  },

  devtools: {
    enabled: true
  },

  css: [ '~/assets/styles/main.scss', '~/assets/styles/tailwind-utils.scss' ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@formkit/auto-animate',
    '@nuxtjs/svg-sprite',
    '@hypernym/nuxt-gsap'
  ],

  svgSprite: {
    input: '~/assets/sprite/svg'
  },
});
