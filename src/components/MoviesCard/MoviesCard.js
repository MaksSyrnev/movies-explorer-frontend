import React from 'react';
import './MoviesCard.css';
//import imgPath from '../../images/pic1.png';
// import SearchForm from '../SearchForm/SearchForm';

function MoviesCard(props) {

  return (
    <li className="movies-card">
      <div className="card__text">
        <h2 className="movies-card__title">{props.title}</h2>
        <p className="movies-card__subtitle">{props.time}</p>
        <div className={`${props.del ? 'movies-card__button-save_hide' : ''}`}>
          <button type="button" aria-label="сохранить" className={`movies-card__button-save ${props.saved ? 'movies-card__button-save_check' : ''}`}></button>
        </div>
        <button type="button" aria-label="удалить" className={`movies-card__button-del ${props.del ? '' : 'movies-card__button-del_hide'}`}></button>
      </div>

      <img src={props.imgPath} className="card__img" alt={props.title} />

      <div className="card__text card__text_bottom">
        <div className="movies-card__text-column">
          <h2 className="movies-card__title">{props.title}</h2>
          <p className="movies-card__subtitle">{props.time}</p>
        </div>
        <div className={`${props.del ? 'movies-card__button-save_hide' : ''}`}>
          <button type="button" aria-label="сохранить" className={`movies-card__button-save ${props.saved ? 'movies-card__button-save_check' : ''}`}></button>
        </div>
        <button type="button" aria-label="удалить" className={`movies-card__button-del ${props.del ? '' : 'movies-card__button-del_hide'}`}></button>
      </div>

    </li>
  );
}

export default MoviesCard;
