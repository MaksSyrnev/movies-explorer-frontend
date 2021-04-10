import React from 'react';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import ErrLoader from '../ErrLoader/ErrLoader';

function MoviesCardList(props) {
  const { preloader, errloader, moviesData } = props;

  return (
    <section className={`movies-cards ${props.hide ? 'movies-cards_hide' : ''}`}>
      <Preloader hide={preloader} />
      <ErrLoader hide={errloader} />
      { (moviesData.length > 0) &&
        <ul className="movies-cards__list">
          {/* <!-- сюда будет грузится массив карточек --> */}
          {moviesData.map((item) => (
            <MoviesCard key={item.movieId} title={item.nameRU} time={item.duration} imgPath={item.image} trailer={item.trailer} saved={item.saved} del={false} />
          )
          )}
        </ul>
      }

      { (moviesData.length > 0) && <button className="movies-cards__button_more">Ещё</button>}
    </section>
  );
}

export default MoviesCardList;
