import express from "express";
import { getProducts, getProductById } from "../controller/product-controller.js";
// import { userSignUp, userLogIn } from "../controller/user-controller.js";
import { userSignUp, userLogIn } from "../controller/user-controller.js";

// import { addItemInCart } from '../controller/cart-controller.js';
// import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';

const router = express.Router();

//login & signup
router.post("/signup", userSignUp);
router.post("/login", userLogIn);

router.get("/products", getProducts);
// this is for backend route, when the call is made by front end to this.
router.get("/product/:id", getProductById);

// router.post('/cart/add', addItemInCart);

// router.post("/payment", addPaymentGateway);
// router.post("/callback", paymentResponse);

export default router;
