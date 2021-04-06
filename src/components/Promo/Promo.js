import React from 'react';
import './Promo.css';
import landingLogoPath from '../../images/landing-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img src={landingLogoPath} alt="абстрация" className="promo_img" />
      </div>
    </section>
  );
}

export default Promo;
