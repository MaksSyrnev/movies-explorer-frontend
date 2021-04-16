import React, { useEffect } from 'react';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile(props) {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  const [isValidEmail, setIsValidEmail] = React.useState('true');
  const [isValidName, setIsValidName] = React.useState('true');
  const [submintDisabled, setSubmintDisabled] = React.useState('true');
  const [see, setSee] = React.useState('false');


  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  useEffect(() => {
    setSee(true);
    setTimeout(hideMessage, 2000);
  }, [props.message]);

  function hideMessage() {
    setSee(false);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  React.useEffect(() => {
    validName(name);
  }, [name]);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  React.useEffect(() => {
    validEmail(email);
  }, [email]);

  function handleEditSubmit(e) {
    e.preventDefault();
    props.onEditProfile(name, email);
  }

  function validEmail(valueInput) {
    const regex = /^[a-z0-9A-z-]*@[a-z0-9A-z-]*\.[a-z0-9A-z-]*/;
    const isValid = regex.test(valueInput);
    setIsValidEmail(isValid);
  }

  function validName(valueInput) {
    const regex = /[^-sa-zа-яё ]/i;
    if (valueInput) {
      const resValid = valueInput.match(regex);
      if (resValid) {
        setIsValidName(false);
      } else {
        setIsValidName(true);
      }
    } else {
      setIsValidName(false);
    }
  }

  React.useEffect(() => {
    const isInputValid = !isValidEmail || !isValidName;
    const newData = (currentUser.name !== name) || (currentUser.email !== email);
    const isSubmintDisabled = isInputValid || !newData;
    setSubmintDisabled(isSubmintDisabled);
  },
    [isValidEmail, isValidName, name, email, currentUser]);

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

          {!isValidName && <span className="form-profile__err" > имя может содержать только буквы и дефис</span>}
          {!isValidEmail && <span className="form-profile__err-email" > введите e-mail</span>}
          {see && <span className="form-profile__err" > {props.message} </span>}
          <button type="submit" className={`${submintDisabled ? 'form-profile__button_disabled' : 'form-profile__button form-profile__button_text'} `} onClick={handleEditSubmit} disabled={submintDisabled}>Редактировать</button>
          <button type="button" className={`form-profile__button form-profile__button_text form-profile__button_red `} onClick={props.signOut}>Выйти из аккаунта</button>
        </form>
      </section>
    </>
  );
}

export default Profile;
