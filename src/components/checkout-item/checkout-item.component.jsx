/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import "./checkout-item.styles.scss";
import {
  addItem,
  clearItemFromCart,
  reduceItemFromCart,
} from "../../redux/cart/cart.action.types";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(clearItemFromCart(cartItem));
  };
  const handleReduceItem = () => {
    dispatch(reduceItemFromCart(cartItem));
  };

  const handleAddItem = () => {
    dispatch(addItem(cartItem));
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="checkout-item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleReduceItem}>
          &#10094;
        </div>
        <span>{quantity}</span>
        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleRemoveItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
