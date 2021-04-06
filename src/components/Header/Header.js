import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoPath from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const { back } = props;

  return (
    <header className={`header ${back ? 'header_back_dark' : ''}`}>
      <div className="header__menu">
        <Link to="/" className="logo__link"><img src={logoPath} alt="логотип" className="logo" /></Link>
        <Navigation back={back} />
      </div>

    </header>
  );
}

export default Header;
