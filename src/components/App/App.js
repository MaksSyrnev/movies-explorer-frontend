import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import movieApi from '../../utils/MoviesApi';
import authApi from '../../utils/Auth';
import api from '../../utils/MainApi';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [preloader, setPreloader] = useState(true);
  const [errloader, setErrloader] = useState(0);
  const [resMovies, setResMovies] = useState([]);
  const [filtredArray, setFiltredArray] = useState([]);
  const [empty, setEmpty] = useState(false);

  const history = useHistory();

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if (isLogged) {
      api.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        }).catch((err) => {
          console.log(err);
        });

      api.getSavedMovies()
        .then((res) => {
          setSavedMovies(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }, [isLogged]);

  function getRegistration(name, mail, pass) {
    authApi.register(name, mail, pass)
      .then((res) => authApi.login(mail, pass))
      .then((res) => {
        localStorage.setItem('token', res.token);
        setIsLogged(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);

      });
  }

  function getLogin(mail, pass) {
    authApi.login(mail, pass)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setIsLogged(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function editProfile(name, mail) {
    api.editUser(name, mail)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function tokenCheck() {
    let t = localStorage.getItem('token');
    if (t) {
      api.getUserInfo()
        .then((res) => {
          setIsLogged(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    setIsLogged(false);
    history.push('/');
  }

  function handleSearchMovieButton(v) {
    setPreloader(false);
    setErrloader(0);
    setEmpty(false);
    let sWord = v;
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
              newItem.year = item.year;
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
              newItem.year = item.year;
            }
            return newItem;
          });
          return movies;
        })
        .then((movies) => {
          localStorage.setItem('movies', JSON.stringify(movies));
          setTimeout(resMovieHandler, 1000, sWord);
        })
        .catch((err) => {
          setTimeout(resMovieHandler, 1000, 1);
        });
    } else {
      //setMoviesData(m);
      setTimeout(resMovieHandler, 1000, sWord);
    }

  }

  function resMovieHandler(v) {
    if (v === 1) {
      setErrloader(1);
      setPreloader(true);
    } else {
      setErrloader(0);
      setPreloader(true);
      let m = JSON.parse(localStorage.getItem('movies'));
      // здесь должен быть поиск
      let resArray = searching(m, v);
      if (resArray.length === 0) {
        setEmpty(true);
      }
      setResMovies(resArray);
    }
  }

  function searching(m, w) {
    const moviesFiltered = [];
    m.forEach(function (element) {
      if (element.country) {
        if (element.country.includes(w)) {
          moviesFiltered.push(element);
        }
      }
    });
    return moviesFiltered;
  }

  function handleSearchShortButton(v) {
    if (v) { // для тру
      let shoortFiltredArray = [];
      if (resMovies.length > 0) {
        shoortFiltredArray = searchShort(resMovies);
      }
      if (shoortFiltredArray.length > 0) {
        setFiltredArray(resMovies);
        setResMovies(shoortFiltredArray);
      }
    } else {
      setResMovies(filtredArray);
    }
  }

  function searchShort(m) {
    const moviesFiltered = [];
    m.forEach(function (element) {
      if (element.duration) {
        if (element.duration <= 40) {
          moviesFiltered.push(element);
        }
      }
    });
    return moviesFiltered;
  }

  function handleSearchSavedMovie(v) {
    let m = savedMovies;
    // здесь должен быть поиск
    let resArray = searching(m, v);
    if (resArray.length === 0) {
      setEmpty(true);
    }
    setSavedMovies(resArray);
  }

  function handleSearchShortSavedButton(v) {
    if (v) { // для тру
      let shoortFiltredArray = [];
      if (savedMovies.length > 0) {
        shoortFiltredArray = searchShort(savedMovies);
      }
      if (shoortFiltredArray.length > 0) {
        setFiltredArray(savedMovies);
        setSavedMovies(shoortFiltredArray);
      }
    } else {
      setSavedMovies(filtredArray);
    }
  }

  function handlerSaveMovie(m) {
    api.saveMovie(m)
      .then((res) => {
        return api.getSavedMovies();
      })
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        console.log('что то пошло не так');
      });
  }

  function handlerToggleSaveMovie(m) {
    let id;
    savedMovies.forEach(function (item) {
      if (item.movieId === m) {
        id = item._id;
      }
    });
    api.deleteMovie(id)
      .then((res) => {
        return api.getSavedMovies();
      })
      .then((res) => {
        setSavedMovies(res);
      })
      .catch(() => {
        console.log('что то пошло не так');
      });
  }

  function handlerDeleteMovie(m) {
    api.deleteMovie(m)
      .then((res) => {
        return api.getSavedMovies();
      })
      .then((res) => {
        setSavedMovies(res);
      })
      .catch(() => {
        console.log('что то пошло не так');
      });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main isLogged={isLogged} />
          </Route>

          <ProtectedRoute path="/movies" isLogged={isLogged} component={Movies} hide={'saved'}
            onSearch={handleSearchMovieButton} moviesData={resMovies} savedMovies={savedMovies} preloader={preloader} errloader={errloader}
            saveMovie={handlerSaveMovie} delMovie={handlerToggleSaveMovie} empty={empty} filterShort={handleSearchShortButton} />

          <ProtectedRoute path="/saved-movies" isLogged={isLogged} component={Movies} hide={'movies'} onSearch={handleSearchSavedMovie}
            savedMovies={savedMovies} delMovie={handlerDeleteMovie} filterShort={handleSearchShortSavedButton} />

          <ProtectedRoute path="/profile" isLogged={isLogged} component={Profile} onEditProfile={editProfile} signOut={handleSignOut} />

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
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
