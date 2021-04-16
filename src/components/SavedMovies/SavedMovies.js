import React from 'react';
import './SavedMovies.css';
import MovieCard from '../MovieCard/MovieCard';

function SavedMovies(props) {
  const { delMovie, currentSaveMovies } = props;

  return (
    <section className="saved-movies" >
      <ul className="saved-movies__list">
        {/* <!-- сюда будет грузится массив карточек --> */}
        {currentSaveMovies.map((item) => (
          <MovieCard key={item.movieId} title={item.nameRU} time={item.duration} imgPath={item.image} trailer={item.trailer} del={true} delMovie={delMovie} movieData={item} />
        )
        )}
      </ul>
    </section>
  );
}

export default SavedMovies;
