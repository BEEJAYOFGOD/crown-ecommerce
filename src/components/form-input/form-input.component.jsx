/* eslint-disable react/prop-types */

import "./form-input.styles.scss";
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <>
      <div className="group">
        <input
          type="text"
          name={label}
          id={label}
          className="form-input"
          onChange={handleChange}
          {...otherProps}
        />
        {label ? (
          <label
            className={`${
              otherProps.value.length ? `shrink` : ""
            } form-input-label`}
          >
            {label}
          </label>
        ) : null}
      </div>
    </>
  );
};

export default FormInput;
