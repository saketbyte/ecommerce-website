export const userSignup = (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log("Sign up route error".error.message);
  }
};
