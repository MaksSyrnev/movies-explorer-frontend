import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logoPath from '../../images/logo.svg'

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(email, pass);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePass(e) {
    setPass(e.target.value);
  }

  return (
    <section className="login">
      <Link to="/" className="logo__link"><img src={logoPath} alt="логотип" className="logo form-login__logo" /></Link>
      <form name="login" method="GET" action="#" className="form-login" onSubmit={handleSubmit} >
        <h2 className="form-login__title">Рады видеть!</h2>
        <label className="form-login__label">E-mail</label>
        <input type="email" name="email" className="form-login__input" value={email} onChange={handleChangeEmail}
          required />
        <label className="form-login__label">Пароль</label>
        <input type="password" name="password" className="form-login__input" value={pass} onChange={handleChangePass}
          required />
        <button type="submit" className="form-login__button">Войти</button>
        <p className="form-login__text">Ещё не зарегистрированы? <Link to="/signup" className="form-login__link">Регистрация</Link></p>
      </form>

    </section>
  );
}

export default Login;
