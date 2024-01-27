import React from "react";

import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box } from "@mui/material";
import { styled } from "@mui/material";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f6f6f6;
`;
function Home() {
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
