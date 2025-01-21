import CustomBtn from "../custom-btn/custom-btn.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import { toggleCartHidden } from "../../redux/cart/cart.action.types";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";


const CartDropdown = () => {
  const { currentUser } = useContext(userContext);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length && currentUser ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomBtn
        onClick={() => {
          goToCheckout();
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomBtn>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Add other properties of cartItem here
    })
  ),
};

export default CartDropdown;
