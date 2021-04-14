import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoPath from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const { isLogged } = props;

  return (
    <header className={`header ${isLogged ? '' : 'header_back_dark'}`}>
      <div className="header__menu">
        <Link to="/" className="logo__link"><img src={logoPath} alt="логотип" className="logo" /></Link>
        <Navigation isLogged={isLogged} />
      </div>

    </header>
  );
}

export default Header;
