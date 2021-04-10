class MovieApi {
  constructor(options) {
    // тело конструктора
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this.baseUrl}`, { headers: this.headers })
      .then(this.getResponse);
  }

  setMovies() {
    let t = localStorage.getItem('token');
    this.headers.Authorization = `Bearer ${t}`;
  }

}

const movieApi = new MovieApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    "Content-Type": "application/json",
  },
});

export default movieApi;
