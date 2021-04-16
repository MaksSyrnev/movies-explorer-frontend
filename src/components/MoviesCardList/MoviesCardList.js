import React, { useEffect } from 'react';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MovieCard from '../MovieCard/MovieCard';
import ErrLoader from '../ErrLoader/ErrLoader';

function MoviesCardList(props) {
  const { preloader, errloader, moviesData, saveMovie, delMovie, count, empty, savedMovies } = props;
  const [moviesRender, setMoviesRender] = React.useState([])

  useEffect(() => {
    const firstArray = moviesData.slice(0, count.repeat);
    setMoviesRender(firstArray);
  }, [count.repeat, moviesData]);

  function handleAddMore() {
    let currentCount = moviesRender.length + count.add;
    let mArr = moviesData.slice(0, currentCount);
    setMoviesRender(mArr);
  }

  function isSaved(id) {
    return savedMovies.some((item) => {
      return item.movieId === id;
    });
  }

  return (
    <section className="movies-cards">
      <Preloader hide={preloader} />
      <ErrLoader hide={errloader} />
      { empty && <p>Ничего не найдено</p>}
      { (moviesData.length > 0) &&
        <ul className="movies-cards__list">
          {moviesRender.map((item) => (
            <MovieCard key={item.movieId} title={item.nameRU} time={item.duration} imgPath={item.image} trailer={item.trailer}
              del={false} saveMovie={saveMovie} delMovie={delMovie} movieData={item} saved={isSaved(item.movieId)} />
          )
          )}
        </ul>
      }
      { (moviesData.length > moviesRender.length) && <button className="movies-cards__button_more" onClick={handleAddMore} >Ещё</button>}
    </section>
  );
}

export default MoviesCardList;
