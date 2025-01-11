/* eslint-disable react/prop-types */
import "./custom-btn.styles.scss";

const CustomBtn = ({ children, isGgoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGgoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
