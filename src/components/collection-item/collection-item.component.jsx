/* eslint-disable react/prop-types */
import CustomBtn from "../custom-btn/custom-btn.component";
import "./collection-item.component";
import "./collection-item.styles.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.action.types";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { currentUser } = useContext(userContext);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  const userNotLoggedIn = () => {
    alert("Please, log in");
    navigate("/signin");
  };

  return (
    <>
      <div className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />

        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <CustomBtn
          onClick={() =>
            currentUser ? handleAddItem(item) : userNotLoggedIn()
          }
          inverted
        >
          Add to cart
        </CustomBtn>
      </div>
    </>
  );
};

export default CollectionItem;
