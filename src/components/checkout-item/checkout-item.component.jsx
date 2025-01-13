/* eslint-disable react/prop-types */
import "./checkout-item.styles.scss";

const CheckOutItem = ({
  cartItem: { name, imageUrl, price, quantity },
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="checkout-item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <spaan className="quantity">{quantity}</spaan>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckOutItem;
