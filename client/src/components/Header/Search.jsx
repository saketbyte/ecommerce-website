import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import styled from "styled-components";

function Search() {
  const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2.5px;
    margin-left: 10px;
    display: flex;
    margin-bottom: 6px;
  `;

  const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
  `;

  const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
  `;

  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brand and more." />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
}

export default Search;
