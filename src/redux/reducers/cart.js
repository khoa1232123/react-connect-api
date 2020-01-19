import * as Types from "../constants/ActionTypes";

var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];
// var initialState = [];

const cart = (state = initialState, action) => {
  var { id, quantity } = action;
  var index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, id);

      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          id,
          quantity
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case Types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case Types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, id);
      if (index !== -1) {
        state[index].quantity += quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

var findProductInCart = (cart, id) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default cart;
