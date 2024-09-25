import React from "react";
import { navData } from "../../constants/constants";
import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 130px 0px 130px",
  justifyContent: "space-between",
  overflow: "overlay",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const NavBar = () => {
  return (
    <Component>
      {navData.map((data) => (
        <Container key={data.id}>
          <img style={{ width: 64 }} src={data.url} alt="nav" />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Component>
  );
};

export default NavBar;
