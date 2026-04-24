const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand")
  .then(() => {
    console.log("Mongo connection open!");
  })
  .catch((err) => {
    console.log("Error connecting to Mongo!");
  });

// const p = new Product({
//   name: "Ruby Grapefruit",
//   price: 1.99,
//   category: "fruit",
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const seedProducts = [
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Banana Bunch",
    price: 1.29,
    category: "fruit",
  },
  {
    name: "Honeycrisp Apples",
    price: 4.49,
    category: "fruit",
  },
  {
    name: "Avocados",
    price: 2.99,
    category: "fruit",
  },
  {
    name: "Baby Spinach",
    price: 2.49,
    category: "vegetable",
  },
  {
    name: "Roma Tomatoes",
    price: 1.99,
    category: "vegetable",
  },
  {
    name: "Carrots",
    price: 1.59,
    category: "vegetable",
  },
  {
    name: "Whole Milk",
    price: 3.19,
    category: "dairy",
  },
  {
    name: "Greek Yogurt",
    price: 4.79,
    category: "dairy",
  },
];

Product.insertMany(seedProducts)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
