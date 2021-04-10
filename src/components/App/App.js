import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
//import Header from '../Header/Header';
import Main from '../Main/Main';
//import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import movieApi from '../../utils/MoviesApi';
import authApi from '../../utils/Auth';

function App() {
  const headerBack = true;
  const [profileSaveHide, setProfileSaveHide] = useState(true);
  const [moviesData, setMoviesData] = useState([]);
  const [preloader, setPreloader] = useState(true);
  const [errloader, setErrloader] = useState(0);
  const [resMovies, setResMovies] = useState([]);

  function getRegistration(name, mail, pass) {
    authApi.register(name, mail, pass)
      .then((res) => {

      })
      .catch((err) => {
        console.log(err);

      });
  }

  function getLogin(mail, pass) {
    authApi.login(mail, pass)
      .then((res) => {
        localStorage.setItem('token', res.token);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function searchMovie(v) {
    setPreloader(false);
    setErrloader(0);
    let m = localStorage.getItem('movies');
    if (!m) {
      movieApi.getMovies()
        .then((res) => {
          let movies = res.map(item => {
            let newItem = {};
            if (item.image) {
              newItem.country = item.country;
              newItem.description = item.description;
              newItem.director = item.director;
              newItem.duration = item.duration;
              newItem.nameEN = item.nameEN;
              newItem.nameRU = item.nameRU;
              newItem.trailer = item.trailerLink;
              newItem.image = `https://api.nomoreparties.co${item.image.url}`;
              newItem.movieId = item.id;
            } else {
              newItem.country = item.country;
              newItem.description = item.description;
              newItem.director = item.director;
              newItem.duration = item.duration;
              newItem.nameEN = item.nameEN;
              newItem.nameRU = item.nameRU;
              newItem.trailer = item.trailerLink;
              newItem.image = `https://api.nomoreparties.co`;
              newItem.movieId = item.id;
            }
            return newItem;
          });
          return movies;
        })
        .then((movies) => {
          localStorage.setItem('movies', JSON.stringify(movies));
          setTimeout(searchHandler, 1000, 0);
        })
        .catch((err) => {
          setTimeout(searchHandler, 1000, 1);
        });
    } else {
      //setMoviesData(m);
      setTimeout(searchHandler, 1000, 0);
    }

  }

  function searchHandler(v) {
    setPreloader(true);
    setErrloader(v);
    console.log(v);
    let m = JSON.parse(localStorage.getItem('movies'));
    console.log(m);
    setResMovies(m);
  }

  function onEditProfile(v) {
    setProfileSaveHide(v);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main back={headerBack} />
        </Route>
        <Route path="/movies">
          <Movies hide={'saved'} onSearch={searchMovie} moviesData={resMovies} preloader={preloader} errloader={errloader} />
        </Route>
        <Route path="/saved-movies">
          <Movies hide={'movies'} />
        </Route>
        <Route path="/profile">
          <Profile onEditProfile={onEditProfile} profileSaveHide={profileSaveHide} />
        </Route>
        <Route path="/signin">
          <Login onLogin={getLogin} />
        </Route>
        <Route path="/signup">
          <Register onRegister={getRegistration} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
