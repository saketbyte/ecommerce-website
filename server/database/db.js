import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const url = `mongodb+srv://${username}:${password}@ecommerce.nb1br7d.mongodb.net/?retryWrites=true&w=majority`;
  console.log(url);
  try {
    await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Database Connected Successfully !");
  } catch (error) {
    console.log("Error while connecting", error.message);
  }
};

export default Connection;
