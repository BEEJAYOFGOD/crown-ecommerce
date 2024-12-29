/* eslint-disable react/prop-types */
import "./custom-btn.styles.scss";

const CustomBtn = ({ children, isGgoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGgoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
