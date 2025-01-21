/* eslint-disable react/prop-types */
import "./cart-icon.styles.scss";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action.types";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";

const CartIcon = () => {
  const { currentUser } = useContext(userContext);
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  const handleToggleCart = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={handleToggleCart}>
      <img src={ShoppingIcon} alt="Shopping cart icon" />
      <span className="item-count">{currentUser ? itemCount : 0}</span>
    </div>
  );
};

export default CartIcon;
