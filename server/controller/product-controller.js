import Product from "../model/product-schema.js";

// getting all data from mongodb
export const getProducts = async (request, response) => {
	try {
		const products = await Product.find({});
		//empty object sends all data.
		// console.log(products);
		response.json(products);
	} catch (error) {
		resonse.status(500).json({ message: error.message });
	}
};

export const getProductById = async (request, response) => {
	try {
		const id = request.params.id;
		const product = await Product.findOne({ "id": id });
		console.log(product);

		response.status(200).json(product);
	} catch (error) {
		response.status(500).json({ message: error.message });
	}
};
