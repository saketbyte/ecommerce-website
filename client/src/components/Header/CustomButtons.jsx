import React from "react"

import { useState, useContext } from "react"
import { Box, Button, Badge, Typography, styled } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { DataContext } from "../../context/DataProvider"
import { useSelector } from "react-redux"
// components
import Profile from "./Profile"
import LoginDialog from "../login/LoginDialog"

//
const Wrapper = styled(Box)(({ theme }) => ({
	alignItems: "center",
	/* justify-content: space-between; */
	// to bring it in one line, flex it.
	display: "flex",
	fontSize: 12,
	margin: "0 3% 0 auto",

	"& > *": {
		marginRight: "40px",
		fontSize: "16px"
	},

	[theme.breakpoints.down("md")]: {
		display: "block"
	}
}))

// Handles CSS of button.
const LoginButton = styled(Button)`
	&& {
		background-color: #ffffff;
		color: #2874f0;
		text-transform: none;

		font-weight: 500;
		border-radius: 1;
		padding: "5px 40px";
		height: 32px;
		box-shadow: none;
		margin-left: 20px;
		margin-right: 20px;
		&& :hover {
			background-color: #ffffff;
		}
	}
`

// This wrapper is to bring the cart and text in one line.
const Container = styled(Link)(({ theme }) => ({
	display: "flex",
	textDecoration: "none",
	color: "inherit",
	[theme.breakpoints.down("md")]: {
		display: "block"
	}
}))

function CustomButtons() {
	const [open, setOpen] = useState(false)
	const { account, setAccount } = useContext(DataContext)

	const handleOpen = () => {
		setOpen(true)
	}
	const cartDetails = useSelector((state) => state.cart)
	const { cartItems } = cartDetails

	return (
		<Wrapper>
			{/* If logged in then display profile else display LogIn buttons. variant=contained shows filled color with shadows */}

			{account ? (
				<Profile account={account} setAccount={setAccount}></Profile>
			) : (
				<LoginButton variant='contained' onClick={() => handleOpen()}>
					Login
				</LoginButton>
			)}
			{/* Increased the width to avoid double lines of content. */}
			<Typography style={{ width: 200 }}>Become a Seller</Typography>
			<Typography style={{ width: 135 }}>More</Typography>

			<Container to='/cart'>
				<Badge badgeContent={cartItems?.length} color='secondary'>
					<ShoppingCart />
				</Badge>
				<Typography style={{ marginLeft: 10 }}>Cart</Typography>
			</Container>
			<LoginDialog open={open} setOpen={setOpen} />
		</Wrapper>
	)
}

export default CustomButtons
