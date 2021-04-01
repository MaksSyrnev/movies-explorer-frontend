import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import accountPath from '../../images/accaunt.svg'

function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleReg() {
    props.onLinkReg(false);
  }

  function handleProfileLink() {
    setIsOpen(false);
    props.onLinkProfile(false);

  }

  function handleMoviesLink() {
    props.onLinkMovies(true);
    setIsOpen(false);
  }

  function handleMenu() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <nav className="navigation">
      <div className={`navigation__movies-conteiner ${props.back ? 'navigation__movies-conteiner_hide' : ''} `} >
        <Link to="/movies" className="navigation__movies-button_link">
          <button className="navigation__movies-button" onClick={handleMoviesLink}>Фильмы</button>
        </Link>
        <Link to="/saved-movies" className="navigation__movies-button_link">
          <button className="navigation__movies-button navigation__movies-button_ligth" onClick={handleMoviesLink}>Сохранённые фильмы</button>
        </Link>
        <Link to="/profile" className="navigation__movies-button_link">
          <button className="navigation__movies-button navigation__movies-button_space" onClick={handleProfileLink}>Аккаунт</button>
          <button className="navigation__movies-button navigation__movies-button_icon" onClick={handleProfileLink}><img src={accountPath} alt="переход в профиль" className="navigation__movies-button_img" /></button>
        </Link>
      </div>

      <div className={`navigation__main-conteiner ${props.back ? '' : 'navigation__main-conteiner_hide'}`}>
        <Link to="/signup" className="navigation__movies-button_link">
          <button className="navigation__main-button navigation__main-button_dark" onClick={handleReg}>Регистрация</button>
        </Link>
        <Link to="/signin" className="navigation__movies-button_link">
          <button className="navigation__main-button navigation__main-button_green" onClick={handleReg}>Войти</button>
        </Link>
      </div>
      <button className="navigation__movies-button navigation__movies-button_burger" onClick={handleMenu}></button>

      <div className={`popup ${isOpen ? 'popup_opened' : ''} `}>
        <div className="popup__container">
          <button type="button" aria-label="закрыть окно" className="popup__button-close" onClick={handleClose}></button>

          <ul className="popup__nav">
            <Link exact to="/" className="popup__menu-link">
              <li className="popup__nav-item">
                <button className="popup__button-menu" onClick={handleMoviesLink}>Главная</button>
              </li>
            </Link>

            <Link to="/movies" className="popup__menu-link">
              <li className="popup__nav-item">

                <button className="popup__button-menu" onClick={handleMoviesLink}>Фильмы</button>
              </li>
            </Link>
            <Link to="/saved-movies" className="popup__menu-link">
              <li className="popup__nav-item">
                <button className="popup__button-menu" onClick={handleMoviesLink}>Сохранённые фильмы</button>
              </li>
            </Link>
          </ul>

          <Link to="/profile" className="popup__menu-link">
            <button className="popup__button-menu popup__button-menu_small" onClick={handleProfileLink}>
              Аккаунт
              <span className="popup__button-menu_img-conteiner">
                <img src={accountPath} alt="переход в профиль" className="popup__button-menu_img" />
              </span>
            </button>
          </Link>

        </div>
      </div>
    </nav >

  );
}

export default Navigation;
