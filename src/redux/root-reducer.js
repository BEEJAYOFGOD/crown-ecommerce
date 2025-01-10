import { combineReducers } from "redux";

// import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// eslint-disable-next-line react-refresh/only-export-components
export default combineReducers({
//   user: userReducer,
  cart: cartReducer,
});
