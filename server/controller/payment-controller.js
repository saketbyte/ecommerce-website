import paytmchecksum from "../paytm/PaytmChecksum.js";
// import { paytmMerchantKey } from "../index.js";
import * as formidable from "formidable";
import https from "https";
import { v4 as uuid } from "uuid";

export const paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;

let paytmParams = {
	"requestType": "Payment",
	"mid": process.env.PAYTM_MID,
	"websiteName": process.env.PAYTM_WEBSITE,
	"orderId": uuid(),
	"callbackUrl": "https://www.ecommerce-website-kappa-sandy.vercel.app/callback",
	"txnAmount": "150.00",
	"custId": process.env.PAYTM_CUST_ID
};

export const addPaymentGateway = async (request, response) => {
	const paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
	try {
		const params = {
			...paytmParams, // use response to get list of items and fetch price from database to access price instead
			"CHECKSUMHASH": paytmCheckSum
		};
		console.log("response in addPaymentGateway", params);
		response.status(200).json(params);
	} catch (error) {
		console.log(error);
	}
};

export const paymentResponse = (request, response) => {
	const form = new formidable.IncomingForm();
	console.log("RequestBody in payment Response: ", request.body);

	const paytmCheckSum = request.body.CHECKSUMHASH;
	delete request.body.CHECKSUMHASH;

	const isVerifySignature = paytmchecksum.verifySignature(request.body, paytmMerchantKey, paytmCheckSum);
	if (isVerifySignature) {
		let paytmParams = {};
		paytmParams["MID"] = request.body.MID;
		paytmParams["ORDERID"] = request.body.ORDERID;

		paytmchecksum.generateSignature(paytmParams, "bKMfNxPPf_QdZppa").then(function (checksum) {
			paytmParams["CHECKSUMHASH"] = checksum;

			const post_data = JSON.stringify(paytmParams);

			const options = {
				hostname: "securegw-stage.paytm.in",
				port: 443,
				path: "/order/status",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Content-Length": post_data.length
				}
			};

			let res = "";
			const post_req = https.request(options, function (post_res) {
				post_res.on("data", function (chunk) {
					res += chunk;
				});

				post_res.on("end", function () {
					let result = JSON.parse(res);
					console.log(result);
					// response.redirect(`http://localhost:3000/`);
					response.redirect(`https://www.ecommerce-website-server-chi.vercel.app/`);
				});
			});
			post_req.write(post_data);
			post_req.end();
		});
	} else {
		console.log("Checksum Mismatched");
	}
};
