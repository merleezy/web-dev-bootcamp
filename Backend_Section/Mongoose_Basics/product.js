const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("Connection open!");
  })
  .catch((err) => {
    console.log("Error!");
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive ya doof!"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

// productSchema.methods.greet = function () {
//   console.log("Howdy!");
//   console.log(`- from ${this.name}`)
// };

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Tire Pump" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  await foundProduct.addCategory("Outdoors");
  console.log(foundProduct);
};

Product.fireSale().then((res) => console.log(res));

// findProduct();

// const bike = new Product({ name: "Mountain Bike", price: 599 });
// const bike = new Product({
//   name: "Cycling Jersey",
//   price: 28.5,
//   categories: ["Cycling"],
//   size: "XS",
// });

// bike
//   .save()
//   .then((data) => {
//     console.log("It worked!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Oh no, error!");
//     console.log(err);
//   });

// Product.findOneAndUpdate(
//   { name: "Tire Pump" },
//   { price: -19.99 },
//   { new: true, runValidators: true },
// )
//   .then((data) => {
//     console.log("It worked!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Oh no!");
//     console.log(err);
//   });
