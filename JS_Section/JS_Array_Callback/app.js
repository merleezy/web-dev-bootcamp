// For Each

const nums = [12, 24, 94, 5, 34, 7, 86, 64, 45, 11, 56, 87, 48, 2, 16];

nums.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

for (let el of nums) {
  console.log(el);
}

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
  {
    title: "The Room",
    score: 23,
    year: 2003,
  },
  {
    title: "Transformers",
    score: 57,
    year: 2007,
  },
  {
    title: "Twilight",
    score: 49,
    year: 2008,
  },
  {
    title: "The Dark Knight",
    score: 94,
    year: 2008,
  },
  {
    title: "Jaws",
    score: 88,
    year: 1975,
  },
  {
    title: "Cats",
    score: 19,
    year: 2019,
  },
];

movies.forEach(function (movie) {
  console.log(`${movie.title} = ${movie.score}/100`);
});

// map Method

const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(function (t) {
  return t.toUpperCase();
});

const doubles = nums.map(function (num) {
  return num * 2;
});

const titles = movies.map(function (movie) {
  return movie.title;
});

// Arrow Functions

// const square = function (x) {
//   return x * x;
// };

const add = (x, y) => {
  return x + y;
};

const square = (x) => {
  return x * x;
};

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

// const rollDie = () => (
//   Math.floor(Math.random() * 6) + 1
// );

// Implicit return (use parentheses instead of curly braces.)
// only work when there is one expression or value to be evaluated
const rollDie = () => Math.floor(Math.random() * 6) + 1;

// const newMovies = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score / 10}`;
// });

const newMovies = movies.map(
  (movies) => `${movies.title} - ${movies.score / 10}`
);

// setTimeout and setInterval

// console.log("HELLO!!!");
// setTimeout(() => {
//   console.log("...are you still there?");
// }, 3000);

// const id = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

// clearInterval(id);

// Filter

const goodMovies = movies.filter((m) => m.score > 80);
const goodTitles = goodMovies.map((m) => m.title);
const badMovies = movies.filter((m) => m.score < 70);
const recentMovies = movies.filter((m) => m.year > 2000);

const products = [
  { id: 1, name: "Gaming Mouse", price: 50, inStock: true },
  { id: 2, name: "Mechanical Keyboard", price: 120, inStock: false },
  { id: 3, name: "Headset", price: 80, inStock: true },
  { id: 4, name: "Monitor", price: 300, inStock: true },
];

const productsInStock = products
  .filter((p) => p.inStock)
  .map((product) => `${product.name} - $${product.price}`);

// Every and some
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

exams.every((score) => score >= 75); // returns true, but if even 1 value was false, its all false
exams.some((score) => score >= 80); // also returns true, but only 1 needs to be true

movies.some((movie) => movie.year > 2015);

// The Notorious Reduce...
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// const total = prices.reduce((total, price) => {
//   return total + price;
// });

const total = prices.reduce((total, price) => total + price);

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

const topRated = movies.reduce((topMovie, currMovie) => {
  if (currMovie.score > topMovie.score) {
    return currMovie;
  }
  return topMovie;
});

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100);

const cart = [
  { name: "Gaming Mouse", price: 50 },
  { name: "Headset", price: 80 },
  { name: "Monitor", price: 300 },
];

const totalPrice = cart.reduce((total, price) => total + price.price, 0);

// arrow functions and this
const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this.fullName());
    }, 3000);
  },
};
