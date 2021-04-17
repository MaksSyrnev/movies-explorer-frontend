import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logoPath from '../../images/logo.svg'

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [isValidEmail, setIsValidEmail] = React.useState('false');
  const [isValidPass, setIsValidPass] = React.useState('false');
  const [submintDisabled, setSubmintDisabled] = React.useState('false');

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(email, pass);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  React.useEffect(() => {
    validEmail(email);
  }, [email])

  function handleChangePass(e) {
    setPass(e.target.value);
  }

  React.useEffect(() => {
    validPass(pass);
  }, [pass])

  function validEmail(valueInput) {
    const regex = /^[a-z0-9A-z-]*@[a-z0-9A-z-]*\.[a-z0-9A-z-]*/;
    const isValid = regex.test(valueInput);
    setIsValidEmail(isValid);
  }

  function validPass(valueInput) {
    const isInputPassFilled = valueInput.length > 0;
    const isValid = isInputPassFilled;
    setIsValidPass(isValid);
  }

  React.useEffect(() => {
    const isSubmintDisabled = !isValidEmail || !isValidPass;
    setSubmintDisabled(isSubmintDisabled);
  },
    [isValidEmail, isValidPass]);

  return (
    <section className="login">
      <Link to="/" className="logo__link"><img src={logoPath} alt="логотип" className="logo form-login__logo" /></Link>
      <form name="login" method="GET" action="#" className="form-login" onSubmit={handleSubmit} >
        <h2 className="form-login__title">Рады видеть!</h2>
        <label className="form-login__label">E-mail</label>
        <input type="email" name="email" className="form-login__input" value={email} onChange={handleChangeEmail}
          required />
        {!isValidEmail ? <span className="form-login__err">не  похоже на Email</span>
          : <span className="form-login__err form-login__err_hide">заполнитель</span>}
        <label className="form-login__label">Пароль</label>
        <input type="password" name="password" className="form-login__input" value={pass} onChange={handleChangePass}
          required />
        {!isValidPass ? <span className="form-login__err">обязательно заполните пароль</span>
          : <span className="form-login__err form-login__err_hide">заполнитель</span>}
        <button type="submit" className={` ${submintDisabled ? 'form-login__button_disabled' : 'form-login__button'}`} disabled={submintDisabled}>Войти</button>
        <p className="form-login__text">Ещё не зарегистрированы? <Link to="/signup" className="form-login__link">Регистрация</Link></p>
      </form>

    </section>
  );
}

export default Login;
