import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search-form-container">
      <form className="search-form_form">
        <input type="text" className="search-form__input" placeholder="Фильм" name="film" />
        <button type="submit" className="search-form__button_submit">Найти</button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
