// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro:{
    plugins:['~/server/db/index.ts'],
  },
  runtimeConfig:{
    mongoDbUrl: process.env.MONGODB_URI,
  }
})
