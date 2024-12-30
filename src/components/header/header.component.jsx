/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Logo from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { userContext } from "../../contexts/userContext";

import "./header.styles.scss";
import { useContext } from "react"; // this is used to consume the context

const Header = () => {
  const { currentUser } = useContext(userContext);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to={"/signin"} className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
