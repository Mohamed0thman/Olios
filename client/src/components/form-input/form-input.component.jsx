import React from "react";

import "./form-input.styles.scss";

const FormInput = ({
  handleChange,
  label,
  isSearch,
  isSignUp,
  ...otherProps
}) => (
  <div className="group">
    <input
      className={`form-input ${isSearch} ${isSignUp}`}
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${otherProps.value.length ? "active" : ""}
      form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
