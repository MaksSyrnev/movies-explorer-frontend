import React from 'react';
import './AboutMe.css';
import photoPath from '../../images/photo.png';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>

      <div className="about-me__content">
        <div className="about-me__data">
          <p className="about-me__name">Виталий</p>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__links">
            <li><a href="https://ru-ru.facebook.com/" className="about-me__link">Facebook</a></li>
            <li><a href="https://github.com/MaksSyrnev/movies-explorer-frontend" className="about-me__link">Github</a></li>
          </ul>
        </div>
        <img src={photoPath} className="about-me__img" alt="фотография автора" />
      </div>

    </section>
  );
}

export default AboutMe;
