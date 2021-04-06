import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm</p>
        <div className="footer__contact">
          <p className="footer__copyright">&copy; 2021</p>
          <ul className="footer__links">
            <li className="footer__links-item"><a href="https://praktikum.yandex.ru/" className="footer__link">Яндекс.Практикум</a></li>
            <li className="footer__links-item"><a href="https://github.com/MaksSyrnev/movies-explorer-frontend" className="footer__link">Github</a></li>
            <li className="footer__links-item"><a href="https://ru-ru.facebook.com/" className="footer__link">Facebook</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
