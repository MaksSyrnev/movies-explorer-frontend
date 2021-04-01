import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input type="checkbox" className="filter-checkbox__input" />
        <span class="filter-checkbox__input_visible"></span>
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
