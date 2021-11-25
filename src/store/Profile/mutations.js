export function set (state, { name, email, phone, country, city }) {
  state.name = name;
  state.email = email;
  state.phone = phone;
  state.country = country;
  state.city = city;
}
