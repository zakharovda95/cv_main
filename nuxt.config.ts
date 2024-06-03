export default defineNuxtConfig({
  imports: {
    autoImport: true,
  },

  devtools: {
    enabled: true,
  },

  css: ['~/assets/styles/main.scss', '~/assets/styles/tailwind.scss'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@formkit/auto-animate',
    '@nuxtjs/svg-sprite',
  ],

  tailwindcss: {
    viewer: true,
    cssPath: ['~/assets/styles/tailwind.scss', { injectPosition: 'last' }],
    configPath: '~/tailwind.config.js',
  },
});
