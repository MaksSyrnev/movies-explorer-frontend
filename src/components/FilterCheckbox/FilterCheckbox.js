import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox(props) {

  function hadleFiltredCheckBox(e) {
    let v = e.target.checked;
    props.filterShort(v);
  }

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input type="checkbox" className="filter-checkbox__input" onClick={hadleFiltredCheckBox} />
        <span className="filter-checkbox__input_visible"></span>
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
