import { createPinia } from 'pinia'
import { useUserStore } from './modules/user.js'
import { useDictStore } from './modules/dict.js'

const pinia = createPinia()

export { useUserStore, useDictStore }

export default {
  install(app) {
    app.use(pinia)
    app.config.globalProperties.$store = {
      userStore: useUserStore(),
      dictStore: useDictStore(),
    }
  },
  useUserStore,
  useDictStore,
}
