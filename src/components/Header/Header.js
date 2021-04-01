import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoPath from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const { onLinkReg, onLinkProfile, onLinkHome, onLinkMovies, back } = props;

  function handleClickLogo() {
    onLinkHome(true);
  }

  return (
    <header className={`header ${back ? 'header_back_dark' : ''}`}>
      <div className="header__menu">
        <Link to="/" className="logo__link" ><img src={logoPath} alt="логотип" className="logo" onClick={handleClickLogo} /></Link>
        <Navigation onLinkReg={onLinkReg} onLinkProfile={onLinkProfile} onLinkMovies={onLinkMovies} back={back} />
      </div>

    </header>
  );
}

export default Header;
