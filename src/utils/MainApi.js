class Api {
  constructor(options) {
    // тело конструктора
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, { headers: this.headers })
      .then(this.getResponse);
  }

  createPost(newCard) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link
      }),
      headers: this.headers
    }).then(this.getResponse);
  }

  deletePost(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(this.getResponse);
  }

  changeLikeCardStatus(cardID, like) {
    return fetch(`${this.baseUrl}/cards/${cardID}/likes`, {
      method: like ? 'PUT' : 'DELETE',
      headers: this.headers,
    }).then(this.getResponse);
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, { headers: this.headers })
      .then(this.getResponse);
  }

  saveUserInfo(userInfo) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about,
      }),
    }).then(this.getResponse);
  }

  setUserAvatar(userInfo) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: userInfo.avatar,
      }),
    }).then(this.getResponse);
  }

  setToken() {
    let t = localStorage.getItem('token');
    this.headers.Authorization = `Bearer ${t}`;
  }

}

const api = new Api({
  baseUrl: 'https://api.onemoredog.space',
  headers: {
    "Authorization": `Bearer ${localStorage.getItem('token')}`,
    "Content-Type": "application/json",
  },
});

export default api;
