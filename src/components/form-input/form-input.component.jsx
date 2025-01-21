/* eslint-disable react/prop-types */

import "./form-input.styles.scss";
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <>
      <div className="group">
        <input
          // type={type}
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
        {/* {type == "password" ? <img src={Hidden} alt="ade" /> : "ad33"} */}
      </div>
    </>
  );
};

export default FormInput;
