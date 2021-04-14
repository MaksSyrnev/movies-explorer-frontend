import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

function SearchForm(props) {
  const [searchWord, setSearchWord] = useState('');
  const [inputErr, setInputErr] = useState('');

  function handleChangeSearchInput(e) {
    setSearchWord(e.target.value);
    setInputErr('');
  }

  function handleClickSearchButton(e) {
    e.preventDefault();

    if (searchWord !== '') {
      return props.onSearch(searchWord);
    }

    setInputErr('Нужно ввести ключевое слово');
  }

  return (
    <div className="search-form-container">
      <form name="search-form" className="search-form_form">
        <input type="text" className="search-form__input" placeholder="Фильм" name="film" value={searchWord || ''} onChange={handleChangeSearchInput} required />
        <button type="submit" className="search-form__button_submit" onClick={handleClickSearchButton}>Найти</button>
        <span className="search-form__input-error" id="search-form-error">{inputErr}</span>
      </form>
      <FilterCheckbox filterShort={props.filterShort} />
    </div>
  );
}

export default SearchForm;
