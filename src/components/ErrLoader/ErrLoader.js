import React from 'react';
import './ErrLoader.css';

function ErrLoader(props) {
  const mess = props.hide;
  let hide = true;

  if (mess !== 0) {
    hide = false;
  }

  return (
    <section className={`error-loader ${hide ? 'error-loader_hide' : ''}`}>
      <p>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз.</p>
    </section>
  );

}

export default ErrLoader;
