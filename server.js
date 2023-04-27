import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const Schema = new mongoose.Schema({
  id: Number,
  category: String,
  name: String,
  ratting: String,
  image: String,
  price: Number,
  oprice: Number,
  quantity: Number,
});

const product = new mongoose.model("Product", Schema);
const app = express();
app.use(express.Router());

const DB = async () => {
  try {
    await mongoose.connect(process.env.URL).then(() => {
      console.log("The connection to the database is successfull");
    });
  } catch (err) {
    console.log(err);
  }
};
DB();

app.get("/products/details/api", async (req, res) => {
  try {
    let data = await product.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log(
    `The server has Started Computing on the address http://localhost:${process.env.PORT}/`
  );
});
