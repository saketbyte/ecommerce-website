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
	cors({
		origin: ["https://www.ecommerce-website-server-chi.vercel.app/"],
		methods: ["POST", "GET"],
		credentials: false
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

Connection(String(process.env.MONGODB_URI));

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

DefaultData();

export default app;

// export const paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
// export let paytmParams = {};
// let callbackURL = "https://localhost:8000/callback";
// paytmParams = {
// 	"requestType": "Payment",
// 	"mid": process.env.PAYTM_MID,
// 	"websiteName": process.env.PAYTM_WEBSITE,
// 	"orderId": uuid(),
// 	"callbackUrl": callbackURL,
// 	"txnAmount": "150.00",
// 	"custId": process.env.PAYTM_CUST_ID
// };
