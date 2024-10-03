import mongoose from "mongoose";

export const Connection = async (url) => {
	// console.log(url);
	try {
		await mongoose.connect(url.toString(), { useUnifiedTopology: true, useNewUrlParser: true });
		console.log("Database Connected Successfully !");
	} catch (error) {
		console.log("Error while connecting", error.message);
	}
};

export default Connection;
