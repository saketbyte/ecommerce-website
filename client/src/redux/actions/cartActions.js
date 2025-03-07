import axios from "axios";
import * as actionType from "../constants/cartConstants";

const URL = "http://localhost:8000";
// const URL = "https://ecommerce-website-kappa-sandy.vercel.app";
<<<<<<< HEAD
// const URL = "https://www.ecommerce-website-server-q5x5qrruf-samriddh-singhs-projects.vercel.app/";
=======
const URL = "https://ecommerce-website-server-chi.vercel.app";
>>>>>>> 6be8b1898da09c61bae951fe51aa713e1563d93c

export const addToCart = (id, quantity) => async (dispatch) => {
	try {
		const { data } = await axios.get(`${URL}/product/${id}`);
		dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
	} catch (error) {
		dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message });
	}
};

export const removeFromCart = (id) => (dispatch) => {
	dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
};
