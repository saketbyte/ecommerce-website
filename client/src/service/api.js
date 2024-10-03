import axios from "axios";

// const URL = "http://localhost:8000";
const URL = "https://ecommerce-website-kappa-sandy.vercel.app";

export const authenticateSignup = async (data) => {
	try {
		return await axios.post(`${URL}/signup`, data);
	} catch (error) {
		console.log("Error while calling signup api", error.messasge);
	}
};

export const authenticateLogin = async (user) => {
	try {
		return await axios.post(`${URL}/login`, user);
	} catch (error) {
		console.log("Error while calling login API: ", error);
		return error.response;
	}
};

export const payUsingPaytm = async (data) => {
	try {
		let response = await axios.post(`${URL}/payment`, data);
		return response.data;
	} catch (error) {
		console.log("Error", error.response.data);
	}
};
