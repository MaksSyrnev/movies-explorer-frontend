import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logoPath from '../../images/logo.svg'

function Register(props) {

  function handleClickLogo() {
    props.onLinkHome(true);
  }

  return (
    <section className="register">
      <Link to="/" className="logo__link"><img src={logoPath} alt="логотип" className="logo form-reg__logo" onClick={handleClickLogo} /></Link>
      <form name="register" method="GET" action="#" className="form-reg" >
        <h2 className="form-reg__title">Добро пожаловать!</h2>
        <label className="form-reg__label">Имя</label>
        <input type="text" name="name" className="form-reg__input"
          minLength="2" maxLength="30" required />
        <label className="form-reg__label">E-mail</label>
        <input type="email" name="email" className="form-reg__input"
          minLength="2" maxLength="30" required />
        <label className="form-reg__label">Пароль</label>
        <input type="password" name="password" className="form-reg__input"
          minLength="2" maxLength="30" required />
        <button type="submit" className="form-reg__button">Зарегистрироваться</button>
        <p className="form-reg__text">Уже зарегистрированы? <Link to="/signin" className="form-reg__link">Войти</Link></p>
      </form>
    </section>
  );
}

export default Register;
