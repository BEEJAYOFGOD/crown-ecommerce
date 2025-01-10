import CustomBtn from "../custom-btn/custom-btn.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
  );
};

export default CartDropdown;
