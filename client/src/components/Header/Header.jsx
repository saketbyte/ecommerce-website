import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import styled from "styled-components";

//components

import Search from "./Search";
import CustomButtons from "./CustomButtons";

function Header() {
  const logoURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
  `;

  const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
  `;

  const Subheading = styled(Typography)`
    font-size: 5px;
    font-style: italic;
  `;

  const PlusImage = styled("img")({
    width: 10,
    height: 10,
    marginLeft: 4,
  });

  const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
  `;

  return (
    <>
      <StyledHeader>
        <Toolbar style={{ height: 55 }}>
          <Component>
            <img src={logoURL} alt="logo" style={{ width: 75 }} />

            <div style={{ display: "flex" }}>
              <Subheading>
                Explore&nbsp;
                <Box component="span" style={{ color: "#FFE500" }}>
                  Plus
                </Box>
              </Subheading>
              <PlusImage src={subURL} alt="sublogo" />
            </div>
          </Component>
          <Search />

          <CustomButtonWrapper>
            <CustomButtons />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </>
  );
}

export default Header;
