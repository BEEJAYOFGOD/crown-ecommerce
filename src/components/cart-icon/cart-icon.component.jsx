/* eslint-disable react/prop-types */
import "./cart-icon.styles.scss";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action.types";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  const handleToggleCart = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={handleToggleCart}>
      <img src={ShoppingIcon} alt="Shopping cart icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
