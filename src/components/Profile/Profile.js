import React, { useEffect } from 'react';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile(props) {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleEdit(e) {
    e.preventDefault();
    props.onEditProfile(name, email);
  }

  return (
    <>
      <Header isLogged={true} />
      <section className="profile">
        <form name="profile" method="GET" action="#" className="form-profile" >
          <h2 className="form-profile__title">Привет, {currentUser.name}!</h2>
          <div className="form-profile__fildset">
            <label className="form-profile__label">Имя</label>
            <input type="text" name="name" className="form-profile__input" value={name || ''} onChange={handleChangeName}
              minLength="2" maxLength="30" required />
          </div>
          <div className="form-profile__fildset">
            <label className="form-profile__label">E-mail</label>
            <input type="email" name="email" className="form-profile__input" value={email || ''} onChange={handleChangeEmail}
              required />
          </div>
          {/* <span className={`form-profile__button ${props.profileSaveHide ? 'form-profile__button_hide' : ''}`} onClick={handleSave}>Сохранить</span> */}
          <button className={`form-profile__button form-profile__button_text `} onClick={handleEdit}>Редактировать</button>
          <button className={`form-profile__button form-profile__button_text form-profile__button_red `} onClick={props.signOut}>Выйти из аккаунта</button>
        </form>
      </section>
    </>
  );
}

export default Profile;
