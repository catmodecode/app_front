import axios from "axios";

export function load (context) {
  return axios.get('/api/users/self').then(user => {
    context.commit('set', {
      city: user.data.data.city ?? '',
      country: user.data.data.country ?? '',
      email: user.data.data.email,
      name: user.data.data.name,
      phone: user.data.data.phone,
    })
  })
}

export function save (context, { name, email, phone, country, city }) {
  return axios.put('/api/users/self', {
    name, email, phone, country, city
  }).then(user => {
    context.commit('set', {
      city: user.data.data.city ?? '',
      country: user.data.data.country ?? '',
      email: user.data.data.email,
      name: user.data.data.name,
      phone: user.data.data.phone,
    })
  })
}
