import express, { Router, urlencoded } from "express";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import router from "./routes/route.js";
import DefaultData from "./default.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

DefaultData();
