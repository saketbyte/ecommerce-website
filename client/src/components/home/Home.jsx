import { useEffect, React } from "react";
import { getProducts } from "../../redux/actions/productActions";

import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box } from "@mui/material";
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f6f6f6;
`;

function Home() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);

  //  we use useDispatch to send a dispatch object here for getProducts funciton - export const getProducts = () => async (dispatch) => {
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  );
}

export default Home;
