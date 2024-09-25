import axios from "axios";
import * as actionType from "../constants/productConstant";

// actions mean to call the api with certain action.
// this double arrow function is from thunk
const URL = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    console.log(data);
    // type of request to differentiate between different actions done in reducer and value
    dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message });
    console.log("Error while calling getProducts API", error.message);
  }
};

// function 2

export const getProductDetails = (id) => async (dispatch) => {
  try {
    // dispatch sends the call to our reducers
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: actionType.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};
