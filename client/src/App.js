import { Box } from "@mui/material"
import "./App.css"
import Header from "./components/Header/Header"
import Home from "./components/home/Home"
import DataProvider from "./context/DataProvider"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailView from "./components/details/DetailView"
import Cart from "./components/cart/Cart"

function App() {
	// {/* ONly those components are kept inside Browser router which will not appear or change in new page */}
	//     {/* And the components which I want to switch must be wrapped by Routes */}
	return (
		<DataProvider>
			<BrowserRouter>
				<Header />
				<Box style={{ marginTop: 54 }}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/product/:id' element={<DetailView />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</Box>
			</BrowserRouter>
		</DataProvider>
	)
}

export default App
