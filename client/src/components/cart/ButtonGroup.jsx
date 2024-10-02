import React, { useState, useEffect } from "react";
import { Box, Button, ButtonGroup, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const Component = styled(ButtonGroup)`
	margin-top: 30px;
`;
const StyledButton = styled(Button)`
	border-radius: 50%;
`;

const GroupedButton = ({ product }) => {
	const dispatch = useDispatch();
	const [count, setCount] = useState(1);

	useEffect(() => {
		dispatch(addToCart(product.id, count));
	}, [count]);

	const addItemToCart = () => {
		dispatch(addToCart(product.id, count));
	};

	const handleIncrement = () => {
		setCount((count) => count + 1);
		addItemToCart();
	};

	const handleDecrement = () => {
		if (count > 1) {
			setCount((count) => count - 1);
			addItemToCart();
		}
	};

	return (
		<Component>
			<StyledButton onClick={handleDecrement}>-</StyledButton>
			<StyledButton disabled>{count}</StyledButton>
			<StyledButton onClick={handleIncrement}>+</StyledButton>
		</Component>
	);
};

export default GroupedButton;

/*

COde without increase decrease functionality
import React from "react"
import { Box, Button, ButtonGroup, styled } from "@mui/material"

const Component = styled(ButtonGroup)
	margin-top: 30px;

const StyledButton = styled(Button)
	border-radius: 50%;


const GroupedButton = () => {
	return (
		<Component>
			<StyledButton>-</StyledButton>
			<StyledButton disabled>1</StyledButton>
			<StyledButton>+</StyledButton>
		</Component>
	)
}

export default GroupedButton


 */
