import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin((nuxtApp) => {
  // register the persisted state plugin with Pinia (client-only)
  nuxtApp.$pinia?.use(piniaPluginPersistedstate)
})
