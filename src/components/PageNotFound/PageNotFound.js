import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <p className="page-not-found__title">404</p>
      <p className="page-not-found__text">Страница не найдена</p>
      <Link className="page-not-found__button" to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound;
