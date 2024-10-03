import express, { Router, urlencoded } from "express";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import router from "./routes/route.js";
import DefaultData from "./default.js";
import cors from "cors";
import { v4 as uuid } from "uuid";
dotenv.config();

const app = express();
app.use(cors());

app.use(
	cors({
		origin: ["https://ecommerce-website-h1qr-9iebacq0c-samriddh-singhs-projects.vercel.app/"],
		methods: ["POST", "GET"],
		credentials: true
	})
);

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

DefaultData();

export const paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;

export let paytmParams = {};
// let callbackURL = "https://localhost:8000/callback";
let callbackURL = "https://ecommerce-website-kappa-sandy.vercel.app/callback";

paytmParams = {
	"requestType": "Payment",
	"mid": process.env.PAYTM_MID,
	"websiteName": process.env.PAYTM_WEBSITE,
	"orderId": uuid(),
	"callbackUrl": callbackURL,
	"txnAmount": "150.00",
	"custId": process.env.PAYTM_CUST_ID
};
