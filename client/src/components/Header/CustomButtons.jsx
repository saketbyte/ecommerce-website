import React from "react";
import styled from "styled-components";

import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

function CustomButtons() {
  const Wrapper = styled(Box)`
    align-items: center;
    display: flex;

    margin: 0 3% 0 auto;
    & > button,
    & > p,
    & > div {
      margin-right: 40px;
      font-size: 16px;
    }
  `;

  const LoginButton = styled(Button)`
    && {
      background-color: #ffffff;
      color: #2874f0;
      text-transform: none;

      font-weight: 500;
      border-radius: 2;
      padding: "5px 40px";
      height: 32px;
      box-shadow: none;
      margin-left: 20px;
      && :hover {
        background-color: #ffffff;
      }
    }
  `;

  const Container = styled(Box)`
    display: flex;
  `;

  return (
    <Wrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography style={{ width: 135 }}>Become a Seller</Typography>
      <Typography style={{ width: 135 }}>More</Typography>

      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  );
}

export default CustomButtons;
