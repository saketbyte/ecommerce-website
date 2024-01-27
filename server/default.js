import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("Data imported succesfully!");
  } catch (error) {
    console.log("Default data could not be inserted", error.message);
  }
};

export default DefaultData;
