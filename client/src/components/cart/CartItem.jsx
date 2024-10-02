import { Typography, Box, Button, styled } from "@mui/material";
import React from "react";
import { addEllipsis } from "../../utils/source-utls";
import GroupedButton from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
	padding: 30px 135px;
	border: 3px solid #f0f0f0;
	display: flex;

	background-color: #fff;
`;

const LeftComponent = styled(Box)`
	margin: 20px;
	display: flex;
	flex-direction: column;
`;
const SellerText = styled(Typography)`
	color: #878787;
	font-size: 13px;
	margin-top: 10px;
`;

const Remove = styled(Button)`
	margin-top: 40px;
	font-size: 16px;
	color: #000;
	font-weight: 600;
`;

const CartItem = ({ item }) => {
	const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

	const dispatch = useDispatch();

	const removeItemFromCart = (id) => {
		dispatch(removeFromCart(id));
	};
	return (
		<>
			<Component>
				<LeftComponent>
					<img src={item.url} height='110px' width='110px' alt='prod' />
					{/* Here are the increase and decrease quantity buttons */}
					<GroupedButton product={item} />
				</LeftComponent>
				<Box style={{ margin: "20px" }}>
					<Typography>{addEllipsis(item.title.longTitle)}</Typography>
					<SellerText>
						Seller: Appario pvt ltd
						<Box component='span'>
							<img style={{ width: "60px", marginLeft: "10px" }} src={fassured} alt='fassured' />
						</Box>
					</SellerText>
					<Typography>
						<Box style={{ fontSize: 28 }} component='span'>
							₹{item.price.cost}
						</Box>
						&nbsp;&nbsp;&nbsp;
						<Box style={{ color: "#878787" }} component='span'>
							<strike>{item.price.mrp}</strike>
						</Box>
						&nbsp;&nbsp;&nbsp;
						<Box style={{ color: "#388e3c" }} component='span'>
							{item.price.discount}
						</Box>
					</Typography>
					<Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
				</Box>
			</Component>
		</>
	);
};

export default CartItem;
