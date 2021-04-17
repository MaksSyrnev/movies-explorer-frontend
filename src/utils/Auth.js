class AuthApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  register(name, email, password) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password
      })
    })
      .then(this.getResponse);
  };

  login(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
      .then(this.getResponse);
  }

}

const authApi = new AuthApi({
  baseUrl: 'https://api.onemoredog.space',
  headers: {
    "Content-Type": "application/json",
  },
});

export default authApi;
