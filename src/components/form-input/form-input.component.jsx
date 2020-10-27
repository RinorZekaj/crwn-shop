import React from "react";

import './form-input.styles.scss'

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label && (
        <label className={`${otherProps.value.length ? "shrink" : ""}`}>
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
