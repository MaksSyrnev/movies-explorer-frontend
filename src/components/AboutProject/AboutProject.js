import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>

      <div className="about-project__description-table">
        <div className="about-project__column">
          <p className="about-project__subtitle">Дипломный проект включал 5 этапов</p>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__column">
          <p className="about-project__subtitle">На выполнение диплома ушло 5 недель</p>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>

      <div className="about-project__calendar-table">
        <div className="about-project__column-title about-project__column-title_green">1 неделя</div>
        <div className="about-project__column-title">4 недели</div>
        <div className="about-project__row-text">Back-end</div>
        <div className="about-project__row-text">Front-end</div>
      </div>

    </section>
  );
}

export default AboutProject;
