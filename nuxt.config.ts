export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: [
    '~/assets/styles/main.scss',
    '~/assets/styles/tailwind.scss',
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  eslint: {
    config: {
      stylistic: false,
    }
  },
  tailwindcss: {
    viewer: true,
    cssPath: ['~/assets/styles/tailwind.scss', { injectPosition: 'last' }],
    configPath: '~/tailwind.config.js',
  },
});
