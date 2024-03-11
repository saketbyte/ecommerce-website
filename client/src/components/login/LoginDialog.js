import React, { useState, useContext } from "react";
import { Dialog, Box, TextField, Button, Typography, styled } from "@mui/material";

import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  width: 28%;
  height: 95%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  padding: 0;
  padding-top: 0;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  latname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

function LoginDialog({ open, setOpen }) {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(!open);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (event) => {
    setSignup({ ...signup, [event.target.name]: event.target.value }); // we use event.target.name as key hence in [];
  };

  const onValueChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log("REsponse is", response);
    if (response.status === 200) {
      console.log(response.status);
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  return (
    <>
      <Dialog onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset", maxHeight: "unset" } }} open={open}>
        <Component>
          <Box style={{ display: "flex", height: "100%" }}>
            <Image>
              <Typography variant="h5">{account.heading}</Typography>
              <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
            </Image>

            {account.view === "login" ? (
              <Wrapper>
                <TextField variant="standard" onChange={(e) => onValueChange(e)} name="username" label="Enter User Name" />
                <TextField variant="standard" onChange={(e) => onValueChange(e)} name="password" label="Enter Password" />
                {error && <Error>Please enter valid username and password!</Error>}
                <Text variant="standard"> By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>

                <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                <Typography style={{ textAlign: "center" }}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart, Create an Account.</CreateAccount>
              </Wrapper>
            ) : (
              <Wrapper>
                <TextField variant="standard" name="firstname" onChange={(e) => onInputChange(e)} label="Enter First Name" />
                <TextField variant="standard" name="lastname" onChange={(e) => onInputChange(e)} label="Enter Last Name" />
                <TextField variant="standard" name="username" onChange={(e) => onInputChange(e)} label="Enter Username" />
                <TextField variant="standard" name="email" onChange={(e) => onInputChange(e)} label="Enter Email" />
                <TextField variant="standard" name="password" onChange={(e) => onInputChange(e)} label="Enter Password" />
                <TextField variant="standard" name="phone" onChange={(e) => onInputChange(e)} label="Enter Mobile Number" />
                <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
              </Wrapper>
            )}
          </Box>
        </Component>
      </Dialog>
    </>
  );
}

export default LoginDialog;
