import React from 'react';
import Header from '../Header/Header';
import './Profile.css';

function Profile(props) {

  function handleEdit() {
    props.onEditProfile(false);
  }

  function handleSave() {
    props.onEditProfile(true);
  }

  return (
    <>
      <Header />
      <section className="profile">
        <form name="profile" method="GET" action="#" className="form-profile" >
          <h2 className="form-profile__title">Привет, Виталий!</h2>
          <div className="form-profile__fildset">
            <label className="form-profile__label">Имя</label>
            <input type="text" name="name" placeholder="Виталий" className="form-profile__input"
              minLength="2" maxLength="30" required />
          </div>
          <div className="form-profile__fildset">
            <label className="form-profile__label">E-mail</label>
            <input type="email" name="email" placeholder="1x@bad.ru" className="form-profile__input"
              minLength="2" maxLength="30" required />
          </div>
          <button type="submit" className={`form-profile__button ${props.profileSaveHide ? 'form-profile__button_hide' : ''}`} onClick={handleSave}>Сохранить</button>
          <button className={`form-profile__button form-profile__button_text ${props.profileSaveHide ? '' : 'form-profile__button_hide'}`} onClick={handleEdit}>Редактировать</button>
          <button className={`form-profile__button form-profile__button_text form-profile__button_red ${props.profileSaveHide ? '' : 'form-profile__button_hide'}`}>Выйти из аккаунта</button>
        </form>
      </section>
    </>
  );
}

export default Profile;
