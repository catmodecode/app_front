import axios from "axios";
import { Notify } from 'quasar'
import { $t } from 'src/boot/i18n'

export function login (context, { email, password }) {
  axios.post('/api/auth/login', {
    email,
    password
  }).then(result => updateTokens(context, result))
}

export function refresh (context) {
  if (context.state.refreshToken === null) {
    return;
  }

  return axios.post('/api/auth/refresh', {
    token: context.state.refreshToken
  }).then(result => updateTokens(context, result))
    .catch(() => {
      context.dispatch('logout')
    })
}

export function logout (context) {
  context.commit('set', {
    token: null,
    refreshToken: null
  })
}

function updateTokens (context, result) {
  context.commit('set', {
    token: result.data.access,
    refreshToken: result.data.refresh,
    accessExpired: result.data.access_expired
  })

  axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.access;
}