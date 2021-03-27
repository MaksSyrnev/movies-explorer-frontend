import React from 'react';
import './Header.css';
import logoPath from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <div className="header__menu">
        <img src={logoPath} alt="логотип" className="logo" />
        <Navigation />
      </div>

    </header>
  );
}

export default Header;
