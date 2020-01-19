import * as Types from "../constants/ActionTypes";
var initialState = {};

const productItem = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCT:
      state = action.product;
      return state;
    default:
      return state;
  }
};

export default productItem;
