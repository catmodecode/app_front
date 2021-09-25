class Token {
  constructor() {
    let accessToken = localStorage.getItem("access_token");
    let refreshToken = localStorage.getItem("refresh_token");
    let accessExpired = localStorage.getItem("access_expired");

    this.setTokens(accessToken, refreshToken, accessExpired);
  }

  setTokens(access, refresh, expire) {
    if (
      access === null ||
      refresh === null ||
      expire === null ||
      access === "undefined" ||
      refresh === "undefined" ||
      expire === "undefined"
    ) {
      this.accessToken = null;
      this.refreshToken = null;
      this.accessExpired = null;
    } else {
      this.accessToken = access;
      this.refreshToken = refresh;
      this.accessExpired = expire;
    }
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
    localStorage.setItem("access_expired", expire);
  }

  clear() {
    this.setTokens(null, null, null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("access_expired");
  }
}

export default Token;
