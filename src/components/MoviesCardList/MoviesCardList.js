import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import imgPath1 from '../../images/pic1.png';
import imgPath2 from '../../images/pic2.png';
import imgPath3 from '../../images/pic3.png';
import imgPath4 from '../../images/pic4.png';
import imgPath5 from '../../images/pic5.png';
import imgPath6 from '../../images/pic6.png';
import imgPath7 from '../../images/pic7.png';

const cardsData = [{
  id: 1,
  title: '33 слова о дизайне',
  time: '1ч 42м',
  imgPath: imgPath1,
  saved: true,
}, {
  id: 2,
  title: 'Киноальманах «100 лет дизайна»',
  time: '1ч 42м',
  imgPath: imgPath2,
}, {
  id: 3,
  title: 'В погоне за Бенкси',
  time: '1ч 42м',
  imgPath: imgPath3,
  saved: true,
}, {
  id: 4,
  title: 'Баския: Взрыв реальности',
  time: '1ч 42м',
  imgPath: imgPath4,
}, {
  id: 5,
  title: 'Бег это свобода',
  time: '1ч 42м',
  imgPath: imgPath5,
}, {
  id: 6,
  title: 'Книготорговцы',
  time: '1ч 42м',
  imgPath: imgPath6,
}, {
  id: 7,
  title: 'Когда я думаю о Германии ночью',
  time: '1ч 42м',
  imgPath: imgPath7,
}];

function MoviesCardList(props) {
  return (
    <section className={`movies-cards ${props.hide ? 'movies-cards_hide' : ''}`}>
      <ul className="movies-cards__list">
        {/* <!-- сюда будет грузится массив карточек --> */}
        {cardsData.map((item) => (
          <MoviesCard key={item.id} title={item.title} time={item.time} imgPath={item.imgPath} saved={item.saved} del={false} />
        )
        )}
      </ul>
      <button className="movies-cards__button_more">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
