import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { DataContext } from "../../context/DataProvider";
// components
import Profile from "./Profile";
import LoginDialog from "../login/LoginDialog";

//
const Wrapper = styled(Box)`
  align-items: center;
  // to bring it in one line, flex it.
  display: flex;
  margin: 0 3% 0 auto;

  // we will handle the child components css
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
  }
`;

// Handles CSS of button.
const LoginButton = styled(Button)`
  && {
    background-color: #ffffff;
    color: #2874f0;
    text-transform: none;

    font-weight: 500;
    border-radius: 1;
    padding: "5px 40px";
    height: 32px;
    box-shadow: none;
    margin-left: 20px;
    && :hover {
      background-color: #ffffff;
    }
  }
`;

// This wrapper is to bring the cart and text in one line.
const Container = styled(Box)`
  display: flex;
`;

function CustomButtons() {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {/* If logged in then display profile else display LogIn buttons. variant=contained shows filled color with shadows */}

      {account ? (
        <Profile account={account} setAccount={setAccount}></Profile>
      ) : (
        <LoginButton variant="contained" onClick={() => handleOpen()}>
          Login
        </LoginButton>
      )}
      {/* Increased the width to avoid double lines of content. */}
      <Typography style={{ width: 135 }}>Become a Seller</Typography>
      <Typography style={{ width: 135 }}>More</Typography>

      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
}

export default CustomButtons;
