// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@fortawesome/fontawesome-free/css/all.css",
  ],
  modules: ['@pinia/nuxt'],
  build: {
    transpile: ["vuetify"],
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    //apiSecret: "123",

    // Keys within public, will be also exposed to the client-side
    public: { apiBaseUrl: process.env.API_BASE_URL },
  },
});
