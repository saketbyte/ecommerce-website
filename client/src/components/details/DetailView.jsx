// From here onwards I need to do react routing.

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Typography, Grid, styled } from "@mui/material";
import ActionItems from "./ActionItems";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
	margin-top: 55px;
	background: #f2f2f2;
`;
const Container = styled(Grid)(({ theme }) => ({
	background: "#FFFFFF",
	display: "flex",
	flexWrap: "wrap", // Allows content to wrap on smaller screens
	justifyContent: "flex-start", // Aligns everything to the left
	[theme.breakpoints.down("md")]: {
		flexDirection: "row", // Stack items vertically on smaller screens
	},
}));

const RightContainer = styled(Grid)`
	margin-top: 50px;
	margin-left: 20px;
	overflow: hidden;
	flex-grow: 1; // Allow it to grow within available space
	/* flex-basis: 50%; // Set base width to 50% to avoid overlap */
	min-width: 300px; // Ensure it doesn't shrink below a certain width
	& > p {
		margin-top: 10px;
	}

	@media (max-width: 960px) {
		margin-top: 20px; // Adjust margin for smaller screens
		padding-left: 0; // Remove padding on smaller screens for better spacing
	}
`;

const DetailView = () => {
	const dispatch = useDispatch();

	const { id } = useParams();
	// used to access data from my redux store.
	const { loading, product } = useSelector((state) => state.getProductDetails);

	useEffect(() => {
		if (product && id !== product.id) dispatch(getProductDetails(id));
	}, [dispatch, id, product, loading]);

	// console.log("DETAILs", product);

	return (
		<Component>
			{!loading && product && Object.keys(product).length && (
				<Container container>
					<Grid item lg={4} md={4} sm={8} xs={12}>
						<ActionItems product={product} />
					</Grid>

					<RightContainer item lg={6} md={4} sm={8} xs={12}>
						<ProductDetail product={product} />
					</RightContainer>
				</Container>
			)}
		</Component>
	);
};

export default DetailView;
