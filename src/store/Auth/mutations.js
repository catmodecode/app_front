export function set (state, { token, refreshToken, accessExpired }) {
  state.token = token
  state.refreshToken = refreshToken
  if (token == null) {
    return
  }
  state.accessExpired = accessExpired * 1000
  const data = parseJwt(token)
  state.userId = data.user_id
  state.groups = data.groups
}

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};
