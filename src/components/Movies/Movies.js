import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {
  const { hide, moviesData, empty, onSearch, preloader, errloader, savedMovies, saveMovie, delMovie } = props;
  const [countCard, setCountCard] = React.useState({ repeat: 0, add: 0 });

  React.useEffect(() => {
    handleResize();
  }, [])

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  function handleResize() {
    let w = window.innerWidth;
    if (w > 768) {
      setCountCard({
        repeat: 7,
        add: 3
      });
    } else if (w > 480) {
      setCountCard({
        repeat: 7,
        add: 2
      });

    } else {
      setCountCard({
        repeat: 5,
        add: 1
      });
    }
  }

  return (
    <>
      <Header isLogged={true} />
      <section className="movies">
        <SearchForm onSearch={onSearch} filterShort={props.filterShort} />
        {hide === "movies"
          ? <SavedMovies savedMovies={savedMovies} delMovie={delMovie} />
          : <MoviesCardList moviesData={moviesData} preloader={preloader} errloader={errloader} saveMovie={saveMovie} delMovie={delMovie} count={countCard} empty={empty} savedMovies={savedMovies} />
        }
      </section>
      <Footer />
    </>
  );
}

export default Movies;
