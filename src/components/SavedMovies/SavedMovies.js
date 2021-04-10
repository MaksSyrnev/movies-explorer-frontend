import React from 'react';
import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies(props) {
  return (
    <section className={`saved-movies ${props.hide ? 'saved-movies_hide' : ''}`}>
      <ul className="saved-movies__list">
        {/* <!-- сюда будет грузится массив карточек --> */}
        {/*  {props.Data.map((item) => (
          <MoviesCard key={item.id} title={item.title} time={item.time} imgPath={item.imgPath} del={true} />
        )
        )} */}
      </ul>
    </section>
  );
}

export default SavedMovies;
