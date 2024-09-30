import { InputBase, Box, List, ListItem, styled } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import React, { useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "../../redux/actions/productActions"

import { Link } from "react-router-dom"

const SearchContainer = styled(Box)`
	background: #fff;
	width: 38%;
	border-radius: 2.5px;
	margin-left: 10px;
	display: flex;
	margin-bottom: 6px;
`

const InputSearchBase = styled(InputBase)`
	padding-left: 20px;
	width: 100%;
`

const SearchIconWrapper = styled(Box)`
	color: blue;
	padding: 5px;
	display: flex;
`
const ListWrapper = styled(List)`
	position: absolute;
	background-color: #ffffff;
	color: #000;
	margin-top: 42px;
`
function Search() {
	const [text, setText] = useState("")

	const { products } = useSelector((state) => state.getProducts)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch])

	const getText = (text) => {
		setText(text)
	}
	return (
		// Wrapper
		<SearchContainer>
			{/* InputSearchBase is an InputBase from Material UI to create an input field in webpage */}
			<InputSearchBase value={text} placeholder='Search for products, brand and more.' onChange={(e) => getText(e.target.value)} />
			<SearchIconWrapper>
				{/* The SearchIcon is as it is from material ui */}
				<SearchIcon />
			</SearchIconWrapper>
			{text && (
				<ListWrapper>
					{products
						.filter((product) => product.title.longTitle.toLowerCase().includes(text.toLowerCase()))
						.map((product) => (
							<ListItem>
								<Link
									to={`/product/${product.id}`}
									onClick={() => {
										setText("")
									}}
									onClose={(e) => {
										e.stopPropagation()
										setText("")
									}}
									style={{ textDecoration: "none", color: "inherit" }}>
									{product.title.longTitle}
								</Link>
							</ListItem>
						))}
				</ListWrapper>
			)}
		</SearchContainer>
	)
}

export default Search
