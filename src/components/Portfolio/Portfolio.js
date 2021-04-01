import React from 'react';
import './Portfolio.css';
import arrowPath from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>

      <ul className="portfolio__nav">
        <li className="portfolio__nav-item">
          <a href="https://makssyrnev.github.io/russian-travel/" className="portfolio__link">
            Статичный сайт
            <img src={arrowPath} alt="кнопка перехода на статичный сайт" className="portfolio__button" />
          </a>
        </li>
        <li className="portfolio__nav-item">
          <a href="https://makssyrnev.github.io/russian-travel/" className="portfolio__link">
            Адаптивный сайт
            <img src={arrowPath} alt="кнопка перехода на адаптивный сайт" className="portfolio__button" />
          </a>
        </li>
        <li className="portfolio__nav-item">
          <a href="https://makssyrnev.github.io/russian-travel/" className="portfolio__link">
            Одностраничное приложение
            <img src={arrowPath} alt="кнопка перехода на одностраничное приложение" className="portfolio__button" />
          </a>
        </li>
      </ul>

    </section>
  );
}

export default Portfolio;
