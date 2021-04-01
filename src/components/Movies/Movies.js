import React from 'react';
import './Movies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMovies from '../SavedMovies/SavedMovies';

function Movies(props) {
  const { hide } = props;
  let movies = false;
  let saved = true;
  let preloader = true;

  if (hide === "movies") {
    movies = true;
    saved = false;
  }

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList hide={movies} />
      <SavedMovies hide={saved} />
      <Preloader hide={preloader} />
    </section>
  );
}

export default Movies;
