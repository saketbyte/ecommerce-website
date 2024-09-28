import React from "react";
import { Typography, Box, TableRow, Table, TableBody, styled, TableCell } from "@mui/material";
import Badge from "@mui/icons-material/LocalOffer";

const SmallText = styled(Box)`
	vertical-align: baseline;
	& > p {
		font-size: 14px;
	}
`;

const StyledBadge = styled(Badge)`
	margin-right: 10px;
	color: #00cc00;
	font-size: 15px;
`;

const ProductDetail = ({ product }) => {
	const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
	const adURL = "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

	const deliveryDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

	return (
		<>
			<Typography>{product.title.longTitle}</Typography>
			<Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
				8 Ratings and 1 Review
				<Box component='span'>
					<img src={fassured} style={{ width: 77, marginLeft: 20, fontWeight: 600 }} alt='fassured' />
				</Box>
			</Typography>
			<Typography>
				<Box style={{ fontSize: 28 }} component='span'>
					₹{product.price.cost}
				</Box>
				&nbsp;&nbsp;&nbsp;
				<Box style={{ color: "#878787" }} component='span'>
					<strike>{product.price.mrp}</strike>
				</Box>
				&nbsp;&nbsp;&nbsp;
				<Box style={{ color: "#388e3c" }} component='span'>
					{product.price.discount}
				</Box>
			</Typography>
			<br />

			<Typography style={{ fontSize: "18px", fontWeight: 500 }}>Available Offers</Typography>

			<SmallText>
				<Typography>
					<StyledBadge />
					Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C
				</Typography>

				<Typography>
					<StyledBadge />
					Bank Offer 10% off up to ₹1,500 on HDFC Bank Credit Card Transactions. Min Txn Value: ₹4,999T&C
				</Typography>

				<Typography>
					<StyledBadge />
					Bank Offer 10% off up to ₹1,750 on HDFC Bank Credit Card EMI Transactions. Min Txn Value: ₹4,999T&C
				</Typography>

				<Typography>
					<StyledBadge />
					Special Price Get extra 42% off (price inclusive of cashback/coupon) T&C
				</Typography>

				<Typography>
					<StyledBadge />
					Partner Offer Make a purchase and enjoy a surprise cashback coupon that you can redeem later! Know More
				</Typography>
			</SmallText>
			<Table style={{ marginTop: "20px" }}>
				<TableBody>
					<TableRow>
						<TableCell style={{ verticalAlign: "baseline", color: "#878787", fontSize: "14px" }}>Delivery</TableCell>
						<TableCell style={{ fontSize: "13px" }}>Delivery By {deliveryDate.toDateString()} | ₹ 40</TableCell>
					</TableRow>
					<TableRow>
						<TableCell style={{ verticalAlign: "baseline", color: "#878787", fontSize: "14px" }}>Warranty</TableCell>
						<TableCell style={{ fontSize: "14px" }}>No Warranty.</TableCell>
					</TableRow>
					<TableRow>
						<TableCell style={{ verticalAlign: "baseline", color: "#878787", fontSize: "14px" }}>Seller</TableCell>
						<TableCell>
							<Box component='span' style={{ fontSize: "13px", color: "#2874f0" }}>
								Appario Retail pvt ltd
							</Box>
							<Typography style={{ fontSize: "13px" }}>GST Invoice available</Typography>
							<Typography style={{ fontSize: "13px" }}>View more sellers starting from {product.price.cost}</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell colSpan={2}>
							<img src={adURL} style={{ width: 350 }} alt='supercoin ad' />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell style={{ verticalAlign: "baseline", color: "#878787", fontSize: "14px" }}>Description</TableCell>
						<TableCell style={{ fontSize: "13px" }}> {product.description}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</>
	);
};

export default ProductDetail;
