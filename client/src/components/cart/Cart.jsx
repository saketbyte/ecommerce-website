import React from "react";
import { useSelector } from "react-redux";
import { Grid, Box, Typography, Button, styled } from "@mui/material";
import TotalBalance from "./TotalBalance";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { post } from "../../utils/paytm";
import { payUsingPaytm } from "../../service/api";

const Container = styled(Grid)(({ theme }) => ({
	padding: "30px 135px",
	display: "flex",
	[theme.breakpoints.down("md")]: {
		padding: "15px 0"
	}
}));

const BottomWrapper = styled(Box)`
	padding: 16px 22px;
	background: #fff;
	box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
	border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
	display: flex;
	margin-left: auto;
	background: #fb641b;
	color: #fff;
	border-radius: 2px;
	width: 250px;
	height: 51px;
`;
const Header = styled(Box)`
	padding: 15px 24px;
	background-color: #fff;
`;
const LeftComponent = styled(Grid)(({ theme }) => ({
	paddingRight: 15,
	[theme.breakpoints.down("md")]: {
		marginBottom: 15
	}
}));
const buyNow = async () => {
	let response = await payUsingPaytm({ amount: 200, email: "saket.sk.kumar@gmail.com" });

	let information = {
		// action: "https://securegw-stage.paytm.in/order/process",
		action: `https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?orderID=${response.orderId}`,
		params: response
	};
	// console.log("ActionItems:", information);

	post(information);
};
const Cart = () => {
	const { cartItems } = useSelector((state) => state.cart);

	return (
		<>
			{cartItems.length ? (
				<Container container>
					<LeftComponent item lg={9} md={9} sm={12} xs={12}>
						<Header>
							<Typography>My Cart ({cartItems.length})</Typography>
						</Header>
						{cartItems.map((item) => (
							<CartItem item={item} />
						))}
						<BottomWrapper>
							<StyledButton onClick={() => buyNow()} variant='contained'>
								PLACE ORDER
							</StyledButton>
						</BottomWrapper>
					</LeftComponent>
					<Grid item lg={3} md={3} sm={12} xs={12}>
						<TotalBalance cartItems={cartItems} />
					</Grid>
				</Container>
			) : (
				<div>
					<EmptyCart />
				</div>
			)}
		</>
	);
};

export default Cart;
