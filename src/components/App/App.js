import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [headerBack, setHeaderBack] = useState(true);
  const [footerActive, setFooterActive] = useState(true);
  const [headerActive, setHeaderActive] = useState(true);

  function onLinkReg(v) {
    setFooterActive(v);
    setHeaderActive(v);
  }

  function onLinkProfile(v) {
    setFooterActive(v);
    setHeaderBack(v);
  }

  function onLinkHome(v) {
    setFooterActive(v);
    setHeaderActive(v);
    setHeaderBack(v);
  }

  function onLinkMovies(v) {
    setFooterActive(v);
    setHeaderBack(!v);
  }

  return (
    <div className="page">
      <div className={!headerActive ? 'header__hide' : ''}>
        <Header onLinkReg={onLinkReg} onLinkProfile={onLinkProfile} onLinkHome={onLinkHome} back={headerBack} onLinkMovies={onLinkMovies} />
      </div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies hide={'saved'} />
        </Route>
        <Route path="/saved-movies">
          <Movies hide={'movies'} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login onLinkHome={onLinkHome} />
        </Route>
        <Route path="/signup">
          <Register onLinkHome={onLinkHome} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <div className={!footerActive ? 'footer__hide' : ''}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
