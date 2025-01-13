import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedTotal, cartItem) =>
      accumalatedTotal + cartItem.quantity * cartItem.price,
    0
  )
);

// Compare this snippet from src/redux/cart/cart.selectors.js:
// import { createSelector } from "reselect";   // This is the correct import
