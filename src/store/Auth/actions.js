import axios from "axios";
import { Cookies, Notify } from 'quasar'
import { route } from "quasar/wrappers";

export function login (context, { email, password }) {
  axios.post('/api/auth/login', {
    email,
    password
  }).then(result => updateTokens(context, result))
    .catch(() => Notify.create({
      type: 'error',
      message: 'Incorrect login or password',
    }))
}

export function restoreAuth (context) {
  const refresh = Cookies.get('refresh')
  context.commit('set', {
    token: null,
    refreshToken: refresh
  })
  context.dispatch('refresh')
}

export function refresh (context) {
  Cookies.remove('refresh');
  if (context.state.refreshToken === null) {
    return;
  }

  axios.post('/api/auth/refresh', {
    token: context.state.refreshToken
  }).then(result => updateTokens(context, result))
    .catch(() => quasar.notify({
      type: 'error',
      message: 'incorrect login or password'
    }))
}

export function logout (context) {
  Cookies.remove('refresh');
  context.commit('set', {
    token: null,
    refreshToken: null
  })
  console.log(route);
}

function updateTokens (context, result) {
  context.commit('set', {
    token: result.data.access,
    refreshToken: result.data.refresh
  })

  axios.defaults.headers.common['Authorization'] = result.data.access;
  Cookies.set('refresh', result.data.refresh)
  const timeOut = (result.data.access_expired * 1000) - new Date();

  setTimeout(() => context.dispatch('refresh'), timeOut - 5000)
}