import React from "react";

import './Checkbox.scss';

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div class="checkbox-container">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      <span class="checkmark" style={isSelected ? {border: 'none'} : {border: ''}}></span>
      {label}
    </label>
  </div>
);

export default Checkbox;
