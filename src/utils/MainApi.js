class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  setToken() {
    let t = localStorage.getItem('token');
    this.headers.Authorization = `Bearer ${t}`;
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, { headers: this.headers })
      .then(this.getResponse);
  }

  editUser(name, email) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this.getResponse);
  }

  getSavedMovies() {
    return fetch(`${this.baseUrl}/movies`, { headers: this.headers })
      .then(this.getResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(this.getResponse);
  }

  saveMovie(newMovie) {
    return fetch('https://api.onemoredog.space/movies', {
      method: 'POST',
      body: JSON.stringify({
        country: newMovie.country,
        director: newMovie.director,
        duration: newMovie.duration,
        year: newMovie.year,
        description: newMovie.description,
        image: newMovie.image,
        trailer: newMovie.trailer,
        nameRU: newMovie.nameRU,
        nameEN: newMovie.nameEN,
        thumbnail: newMovie.image,
        movieId: newMovie.movieId
      }),
      headers: this.headers
    }).then(this.getResponse);
  }

  changeSavedMovieStatus(movieId, like) {
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      method: like ? 'PUT' : 'DELETE',
      headers: this.headers,
    }).then(this.getResponse);
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
