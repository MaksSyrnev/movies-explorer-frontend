import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import accountPath from '../../images/accaunt.svg'

function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <nav className="navigation">

      <div className={`navigation__main-conteiner ${props.back ? '' : 'navigation__main-conteiner_hide'}`}>
        <Link to="/signup" className="navigation__main-button_link">
          <button className="navigation__main-button navigation__main-button_dark" >Регистрация</button>
        </Link>
        <Link to="/signin" className="navigation__main-button_link">
          <button className="navigation__main-button navigation__main-button_green" >Войти</button>
        </Link>
      </div>

      <div className={`navigation__movies-conteiner ${props.back ? 'navigation__movies-conteiner_hide' : ''} `} >

        <Link to="/movies" className="navigation__movies-button_link">
          <button className="navigation__movies-button" onClick={handleClose}>Фильмы</button>
        </Link>
        <Link to="/saved-movies" className="navigation__movies-button_link">
          <button className="navigation__movies-button navigation__movies-button_ligth" onClick={handleClose}>Сохранённые фильмы</button>
        </Link>
        <Link to="/profile" className="navigation__movies-button_link">
          <button className="navigation__movies-button navigation__movies-button_space" onClick={handleClose}>Аккаунт</button>
          <button className="navigation__movies-button navigation__movies-button_icon" onClick={handleClose}>
            <img src={accountPath} alt="переход в профиль" className="navigation__movies-button_img" />
          </button>
        </Link>
        <button className="navigation__movies-button navigation__movies-button_burger" onClick={handleMenu}></button>

        <div className={`popup ${isOpen ? 'popup_opened' : ''} `}>
          <div className="popup__container">
            <button type="button" aria-label="закрыть окно" className="popup__button-close" onClick={handleClose}></button>

            <ul className="popup__nav">
              <li className="popup__nav-item">
                <NavLink exact to="/" activeClassName="popup__menu-link_active" className="popup__menu-link">
                  <button className="popup__button-menu" onClick={handleClose}>Главная</button>
                </NavLink>
              </li>
              <li className="popup__nav-item">
                <NavLink to="/movies" activeClassName="popup__menu-link_active" className="popup__menu-link">
                  <button className="popup__button-menu" onClick={handleClose}>Фильмы</button>
                </NavLink>
              </li>
              <li className="popup__nav-item">
                <NavLink to="/saved-movies" activeClassName="popup__menu-link_active" className="popup__menu-link">
                  <button className="popup__button-menu" onClick={handleClose}>Сохранённые фильмы</button>
                </NavLink>
              </li>
            </ul>

            <Link to="/profile" className="popup__menu-link">
              <button className="popup__button-menu popup__button-menu_small" onClick={handleClose}>
                Аккаунт
                <span className="popup__button-menu_img-conteiner">
                  <img src={accountPath} alt="переход в профиль" className="popup__button-menu_img" />
                </span>
              </button>
            </Link>

          </div>
        </div>

      </div>

    </nav >

  );
}

export default Navigation;
