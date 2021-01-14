import React from "react";

import './Checkbox.scss';

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div class="checkbox-container">
    <label class="checkbox-container__label">
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {/* if checkbox is selected then change the grey border to none */}
      <span class="checkmark" style={isSelected ? {border: 'none'} : {border: ''}}></span>
      {label}
    </label>
  </div>
);

export default Checkbox;
