const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const PORT = 3000;

const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand")
  .then(() => {
    console.log("Mongo connection open!");
  })
  .catch((err) => {
    console.log("Error connecting to Mongo!");
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
