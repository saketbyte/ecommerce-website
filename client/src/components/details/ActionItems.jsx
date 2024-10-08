import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { payUsingPaytm } from "../../service/api.js";
import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)`
	margin-left: 15px;
	min-width: 40%;
	overflow: hidden;
	width: 80%; // Make it fully responsive
	padding: 40px 20px; // Adjust padding to handle different screen sizes
	@media (max-width: 960px) {
		padding: 20px 10px; // Adjust padding for smaller screens
	}
`;

const Image = styled("img")({
	width: "100%", // Make the image responsive
	height: "auto", // Maintain the aspect ratio
	margin: "0 auto", // Center the image
	display: "block" // Ensures the image is block-level for proper centering
});

const StyledButton = styled(Button)`
	width: 48%;
	height: 50px;
	border-radius: 2px;
`;

const ActionItems = ({ product }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);

	const addItemToCart = () => {
		dispatch(addToCart(product.id, quantity));
		navigate("/cart");
	};

	const buyNow = async () => {
		let response = await payUsingPaytm({ amount: 200, email: "saket.sk.kumar@gmail.com" });

		let information = {
			// action: "https://securegw-stage.paytm.in/order/process",
			action: `https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?orderID=${response.orderId}`,
			params: response
		};
		console.log("ActionItems:", information);

		post(information);
	};

	return (
		<LeftContainer>
			<Box style={{ width: "90%", padding: "15px 20px", border: "2px solid #f0f0f0" }}>
				<Image src={product.detailUrl} alt='product' />
			</Box>
			<Box style={{ marginTop: 10 }}>
				<StyledButton variant='contained' onClick={() => addItemToCart()} style={{ marginRight: 10, background: "#ff9f00" }}>
					<Cart /> Add to Cart
				</StyledButton>
				<StyledButton variant='contained' onClick={() => buyNow()} style={{ background: "#fb541b" }}>
					<Flash />
					Buy Now
				</StyledButton>
			</Box>
		</LeftContainer>
	);
};

export default ActionItems;
