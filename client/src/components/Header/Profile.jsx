import { useState } from "react";

// import { Link } from "react-router-dom";
import { Typography, Menu, MenuItem, Box, styled } from "@mui/material";
import { PowerSettingsNew } from "@mui/icons-material";
const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
  //state to show log out button or not
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    //Get the element that triggered the event:
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    setAccount("");
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, marginLeft: 8 }}>{account}</Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}>
          <PowerSettingsNew fontSize="small" color="primary" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
