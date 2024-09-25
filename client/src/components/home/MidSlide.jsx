import React from "react";

import { Box, styled } from "@mui/material";
import Slide from "./Slides";

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  padding: "5px",
  marginTop: "10px",
  marginLeft: "10px",
  width: "17%",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MidSlide = ({ products, title, timer }) => {
  const adURL = "https://rukminim2.flixcart.com/fk-p-flap/530/810/image/8aee35501ae3a18b.png?q=20";

  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer}></Slide>
      </LeftComponent>
      <RightComponent>
        <img src={adURL} style={{ width: 210 }} alt="adv" />
      </RightComponent>
    </Component>
  );
};

export default MidSlide;
