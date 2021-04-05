import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
//import Header from '../Header/Header';
import Main from '../Main/Main';
//import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const headerBack = true;
  const [profileSaveHide, setProfileSaveHide] = useState(true);

  function onEditProfile(v) {
    setProfileSaveHide(v);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main back={headerBack} />
        </Route>
        <Route path="/movies">
          <Movies hide={'saved'} />
        </Route>
        <Route path="/saved-movies">
          <Movies hide={'movies'} />
        </Route>
        <Route path="/profile">
          <Profile onEditProfile={onEditProfile} profileSaveHide={profileSaveHide} />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
