import { useEffect, React } from "react";
import { getProducts } from "../../redux/actions/productActions";

// components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slides";

import { Box } from "@mui/material";
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f6f6f6;
`;

function Home() {
  const dispatch = useDispatch();

  // this getProducts is from chrome redux dev tool
  const { products } = useSelector((state) => state.getProducts);

  //  we use useDispatch to send a dispatch object here for
  // getProducts funcition - export const getProducts = () => async (dispatch) => {

  useEffect(() => {
    dispatch(getProducts());
    // we need to dispatch everytime product list updates hence bass in effect arguments
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true}></MidSlide>
        <MidSection />
        <Slide products={products} title="Discounts for You" timer={false} />
        <Slide products={products} title="Suggested Items" timer={false} />
        <Slide products={products} title="Top Selections" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Season's Top Picks" timer={false} />
        <Slide products={products} title="Top Deals on Accessories" timer={false} />
      </Component>
    </>
  );
}

export default Home;
