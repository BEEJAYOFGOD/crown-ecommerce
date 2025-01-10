/* eslint-disable react/prop-types */
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action.types";

import ShoppingIcon from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <img src={ShoppingIcon} alt="" />
      <span className="item-count">4</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
