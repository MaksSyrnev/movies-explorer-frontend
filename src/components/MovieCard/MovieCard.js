import React from 'react';
import './MovieCard.css';

function MovieCard(props) {
  const { imgPath, time, delMovie } = props;

  let h = Math.floor(time / 60);
  let min = time % 60;

  function handlerSaveClick(e) {
    if (props.saved) {
      delMovie(props.movieData.movieId);
    } else {
      props.saveMovie(props.movieData);
    }

  }

  function handleDelClick(e) {
    delMovie(props.movieData._id);
  }

  return (
    <li className="movies-card">
      <div className="card__text">
        <h2 className="movies-card__title">{props.title}</h2>
        <p className="movies-card__subtitle">{`${h}ч ${min}м`}</p>
        <div className={`${props.del ? 'movies-card__button-save_hide' : ''}`}>
          <button type="button" aria-label="сохранить" className={`movies-card__button-save ${props.saved ? 'movies-card__button-save_check' : ''}`} onClick={handlerSaveClick}></button>
        </div>
        <button type="button" aria-label="удалить" className={`movies-card__button-del ${props.del ? '' : 'movies-card__button-del_hide'}`} onClick={handleDelClick}></button>
      </div>

      <a href={props.trailer} className="movies-card__link-trailer"><img src={imgPath} className="card__img" alt={props.title} /></a>

      <div className="card__text card__text_bottom">
        <div className="movies-card__text-column">
          <h2 className="movies-card__title">{props.title}</h2>
          <p className="movies-card__subtitle">{`${h}ч ${min}м`}</p>
        </div>
        <div className={`${props.del ? 'movies-card__button-save_hide' : ''}`}>
          <button type="button" aria-label="сохранить" className={`movies-card__button-save ${props.saved ? 'movies-card__button-save_check' : ''}`} onClick={handlerSaveClick}></button>
        </div>
        <button type="button" aria-label="удалить" className={`movies-card__button-del ${props.del ? '' : 'movies-card__button-del_hide'}`} onClick={handleDelClick}></button>
      </div>

    </li>
  );
}

export default MovieCard;
