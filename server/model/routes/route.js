import express from "express";
import { userSignup } from "../../controller/user-controller";

const Router = express.Router();

Router.post("/signup", userSignup);

export default Router;
