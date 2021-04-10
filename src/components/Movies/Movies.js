import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {
  const { hide, back, moviesData, onSearch, preloader, errloader } = props;
  let movies = false;
  let saved = true;
  //let preloader = true;

  if (hide === "movies") {
    movies = true;
    saved = false;
  }

  return (
    <>
      <Header back={back} />
      <section className="movies">
        <SearchForm onSearch={onSearch} />
        <MoviesCardList hide={movies} moviesData={moviesData} preloader={preloader} errloader={errloader} />
        <SavedMovies hide={saved} />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
