// Default params

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hey there", punc = "!") {
  console.log(`${msg}, ${person}${punc}`);
}

// Spread with function calls

const nums = [
  742, 18, 509, 963, 287, 654, 91, 830, 476, 12, 399, 1000, 558, 204, 67,
];

/*  each number in nums is passed as a
    separate argument, applies to any iterable (like strings)
*/
Math.min(...nums);
console.log(...nums);

// Spread with array literals

const cats = ["Vader", "Leah", "Tigger", "Callie", "Gizmo", "Felix"];
const dogs = ["Luke", "Cooper"];

const allPets = [...cats, ...dogs];
const hello = [..."hello"];

// Spread with object literals

const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const newFeline = { ...feline, color: "black" };
const catDog = { ...feline, ...canine }; // since there is a conflict, the last (canine) wins

const dataFromForm = {
  email: "blueman@gmail.com",
  password: "tobias123!",
  username: "tfunke",
};

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

// Rest params

// function sum() {
//   return arguments.reduce((total, element) => total + element)
// }

function sum(...nums) {
  return nums.reduce((total, element) => total + element);
}

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`EVERYONE ELSE: ${everyoneElse}`);
}

// Destructuring arrays

const scores = [998342, 941705, 883219, 764950, 652481, 497306, 283914, 134672];

// const gold = scores[0];
// const silver = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

// Destructuring objects

const user = {
  email: "jane.doe@example.com",
  password: "securePassword123",
  firstName: "Jane",
  lastName: "Doe",
  born: 1930,
  died: 1978,
  bio: "A curious soul who loved books, travel, and late-night conversations.",
  city: "Portland",
  state: "Oregon",
};

const user2 = {
  email: "stacy.gonzalez@example.com",
  firstName: "Stacy",
  lastName: "Gonzalez",
  born: 1987,
  city: "Tulsa",
  state: "Oklahoma",
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { email, firstName, lastName, city, bio } = user;
const { born: birthYear, died: deathYear = null } = user;

const { city, state, died = null } = user2; // you can set a default value

// Destructuring params

// function fullName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// function fullName(user) {
//   const {firstName, lastName} = user;
//   return `${firstName} ${lastName}`;
// }

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
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

// movies.filter((movie) => movie.score >= 90);
// movies.filter(({score}) => score >= 90);

// movies.map((movie) => {
//   return `${movie.title} (${movie.year}) is rated ${movie.score}`;
// });

movies.map(({ title, score, year }) => {
  return `${title} (${year}) is rated ${score}`;
});
