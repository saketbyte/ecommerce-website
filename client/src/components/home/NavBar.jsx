import React from "react";
import { navData } from "../../constants/constants";
import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  display: flex;
  margin: 55px 130px 0px 130px;
  justify-content: space-between;
`;

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
