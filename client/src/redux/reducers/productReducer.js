import * as actionType from "../constants/productConstant";

// arguments involve state and action
// action will store the JSON sent by dispatch function
// Ex: { type: actionType.GET_PRODUCTS_SUCCESS, payload: data }
// pass empty array in products to stop undefined breakage
export const getProductReducer = (state = { products: [] }, action) => {
  // must to return something in reducer functions.
  switch (action.type) {
    case actionType.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };

    case actionType.GET_PRODUCTS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
