import React from 'react';
import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import imgPath1 from '../../images/pic1.png';
import imgPath2 from '../../images/pic2.png';
import imgPath3 from '../../images/pic3.png';

const cardsData = [{
  id: 1,
  title: '33 слова о дизайне',
  time: '1ч 42м',
  imgPath: imgPath1,
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
}];

function SavedMovies(props) {
  return (
    <section className={`saved-movies ${props.hide ? 'saved-movies_hide' : ''}`}>
      <ul className="saved-movies__list">
        {/* <!-- сюда будет грузится массив карточек --> */}
        {cardsData.map((item) => (
          <MoviesCard key={item.id} title={item.title} time={item.time} imgPath={item.imgPath} del={true} />
        )
        )}
      </ul>
    </section>
  );
}

export default SavedMovies;
