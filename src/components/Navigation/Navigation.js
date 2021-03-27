import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <button className="navigation__button navigation__button_back_none">Регистрация</button>
      <button className="navigation__button navigation__button_back_green">Войти</button>
    </nav>

  );
}

export default Navigation;
