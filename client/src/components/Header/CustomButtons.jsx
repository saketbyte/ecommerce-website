import React from "react";
import styled from "styled-components";

import { Box, Button, Typography } from "@mui/material";

function CustomButtons() {
  const Wrapper = styled(Box)`
    align-items: center;
    margin: 0 3% 0 auto;
    display: flex;
    & > :no-button,
    & > padding,
    & > div {
      margin-right: 40px;
      font-size: 14px;
    }
  `;

  const Container = styled(Box)`
    display: flex;
  `;

  const LoginButton = styled(Button)`
    background-color: #ffffff;
    color: #2874f0;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    height: 32px;
  `;

  return (
    <Wrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3, width: 135 }}>More</Typography>

      <Box>
        {/* <ShoppingCart /> */}
        <Typography>Cart</Typography>
      </Box>
    </Wrapper>
  );
}

export default CustomButtons;
