// Introducing functions

function rollDie(numSides = 6) {
  let die = Math.floor(Math.random() * numSides) + 1;
  console.log(die);
  return die;
}

function multiRoll(numDie, numSides = 6) {
  for (let i = 0; i < numDie; i++) {
    console.log(rollDie(numSides));
  }
}

function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

function repeat(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  console.log(result);
}

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return NaN;
  }
  return x + y;
}
const sum = add(102, 29);
console.log(sum);

greet("Elvis", "Presley");
repeat("Penis ", 10);
// multiRoll(12);

// Leveling up our functions

// function scope
function collectEggs() {
  let totalEggs = 6;
  console.log(totalEggs);
}
// console.log(totalEggs); // not defined

let bird = "Scarlet Macaw";
function birdWatch() {
  let bird = "Great Blue Heron";
  console.log(bird); // great blue heron
}
birdWatch();
// console.log(bird); // scarlet macaw

// block scope
let radius = 8;
if (radius > 0) {
  const PI = 3.14159; // cant be accessed outside
  let msg = "HIII"; // cant be accessed outside
}

for (let i = 0; i < 5; i++) {
  var msg = "KJFJKFF";
  console.log(msg);
}
// console.log(msg); // still defined

// Lexical scope

function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batman"];
  function cryForHelp() {
    function inner() {
      for (let hero of heroes) {
        console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
      }
    }
    inner();
  }
  cryForHelp();
}

// Function expressions

// function multiply(x, y) {
//   return x * y;
// }

const multiply = function (x, y) {
  return x * y;
};

// Higher order functions

function callTwice(func) {
  func();
  func();
}

// callTwice(rollDie);

function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("CONGRATS! I AM A GOOD FUNCTION!");
      console.log("HERES 1 MILLION DOLLARS!");
    };
  } else {
    return function () {
      alert("YOU JUST GOT HACKED NERD! L BOZO + RATIO LMAOOOOO!!!!");
      alert("LOL YOU CAN'T CLOSE IT!!!!");
      alert("LOL YOU CAN'T CLOSE IT!!!!");
      alert("LOL YOU CAN'T CLOSE IT!!!!");
      alert("LOL YOU CAN'T CLOSE IT!!!!");
      alert("LOL YOU CAN'T CLOSE IT!!!!");
      alert("LOL YOU CAN'T CLOSE IT!!!!");
      alert("LOL YOU CAN'T CLOSE IT!!!!");
    };
  }
}

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

// Functions and objects (methods)

const myMath = {
  PI: 3.14159,
  square: function (x) {
    return x * x;
  },
  multiply: function (x, y) {
    return x * y;
  },
  cube(x) {
    return x ** 3;
  },
};

const cat = {
  name: "Vader",
  color: "black",
  breed: "tabby",
  meow() {
    console.log("THIS IS:", this);
    console.log(`${this.name} says MEOWWWW`);
  },
};

const meow2 = cat.meow;

// Try / Catch

// try {
//   hello.toUpperCase();
// } catch {
//   console.log("Bruh. You got an error.")
// }

// console.log("AFTER")

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (error) {
    console.log("Please pass in a string.")
  }
}
