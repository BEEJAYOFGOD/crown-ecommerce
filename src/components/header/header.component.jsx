/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Logo from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { userContext } from "../../contexts/userContext";

import "./header.styles.scss";
import { useContext } from "react"; // this is used to consume the context
import { signOut } from "firebase/auth";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ hidden }) => {
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
              signOut(auth)
                .then(() => {
                  console.log("User signed out successfully");
                })
                .catch((error) => {
                  console.error("Error signing out:", error);
                });
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to={"/signin"} className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});

export default connect(mapStateToProps)(Header);
