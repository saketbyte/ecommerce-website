import axios from "axios";
import * as actionType from "../constants/productConstant";

export const getProducts = () => async (dispatch) => {
  const URL = "http://localhost:8000";
  try {
    const { data } = await axios.get(`${URL}/products`);
    console.log(data);

    dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message });
    console.log("Error while calling getProducts API", error.message);
  }
};
