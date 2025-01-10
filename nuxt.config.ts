export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    assetsInclude: ['**/*.svg'], 
  },
  
 
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxtjs/i18n'],
  runtimeConfig: {
    public: {
      apiBaseURL: `${process.env.BaseURL}api`,
      apiKey: process.env.API_KEY,
      apiGetPostsURL:`${process.env.BaseURL}api/get-crypto-posts?offset=`,
      apiGetRightURL:`${process.env.BaseURL}api/get-posts?offset=`,
      LEFT_SIDE_URL: process.env.BaseURL , 
      VALUTA_URL:process.env.VALUTA_API_URL,
      URL_LINK:process.env.URL_LINK,
      apiKey2:process.env.API_KEY1
    },
  },
  image: {
    dir: "assets/images",
  },
 
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800;900&display=swap',
        },
        {rel: 'icon', type: 'image/png', href: '_nuxt/assets/images/favicon.png' }

      ],
    },
  },
});
