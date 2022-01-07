import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Store } from 'src/store'
import { Notify } from 'quasar'
import { $t } from 'src/boot/i18n'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://api.example.com' })

const cache = [];

axios.interceptors.request.use(
  config => {
    const found = cache.findIndex(item => JSON.stringify(item) === JSON.stringify(config))
    if (found >= 0) {
      const newConf = {
        adapter: ({ }) => Promise.resolve({ loading: true })
      }
      return newConf
    }
    cache.push(config);
    if (
      !['/api/auth/refresh', '/api/auth/login'].find(val => config.url == val) &&
      Store.getters['auth/isExpired']
    ) {
      return Store.dispatch('auth/refresh').then(() => {
        config.headers.Authorization = axios.defaults.headers.common.Authorization
        return config
      })
    }
    return config
  },
)

axios.interceptors.response.use(
  value => {
    if (value.loading) {
      return Promise.reject('duplicate');
    }
    const found = cache.findIndex(item => JSON.stringify(item) === JSON.stringify(value.config))
    if (found >= 0) {
      cache.splice(found, 1);
    }
    return value
  },
  error => {
    const errors = error.response?.data?.errors ?? [];
    if (error === 'duplicate') {
      return Promise.resolve();
    }
    if (Array.isArray(errors)) {
      errors.forEach(errKey => {
        Notify.create({ type: 'error', message: $t('errors.' + errKey) })
      });
    }
    return Promise.reject(error);
  }
)

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
