import React from 'react';
import './Movies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {
  const { hide, back } = props;
  let movies = false;
  let saved = true;
  let preloader = true;

  if (hide === "movies") {
    movies = true;
    saved = false;
  }

  return (
    <>
      <Header back={back} />
      <section className="movies">
        <SearchForm />
        <MoviesCardList hide={movies} />
        <SavedMovies hide={saved} />
        <Preloader hide={preloader} />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
