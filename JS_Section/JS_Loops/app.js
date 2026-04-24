// For Loops

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//   console.log(i);
// }

// Looping over arrays

// const nflTeams = [
//   "lions",
//   "bears",
//   "chargers",
//   "packers",
//   "broncos",
//   "steelers",
//   "eagles",
//   "chiefs",
//   "titans",
// ];

// for (let i = 0; i < nflTeams.length; i++) {
//   console.log(i, nflTeams[i]);
// }

// for (let i = nflTeams.length - 1; i >= 0; i--) {
//   console.log(i, nflTeams[i]);
// }

// Nested Loops

// for (let i = 1; i <= 10; i++) {
//   console.log(`i is ${i}`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`   j is ${j}`);
//   }
// }

// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`ROW ${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`   ${row[j]}`);
//   }
// }

// While Loop

// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//   guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS!!! YOU GOT THE SECRET");

// let input = prompt("Hey, say something!");

// The Break Keyword

// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!");

// for (let i = 0; i < 1000; i++) {
//   console.log(i);
//   if (i === 100) break;
// }

// Guessing Game

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("Enter your first guess! (Type 'q' to quit)");
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") break;
//   guess = parseInt(guess);
//   if (guess > targetNum) {
//     guess = prompt("Too High! Enter a new guess:");
//     attempts++;
//   } else if (guess < targetNum) {
//     guess = prompt("Too Low! Enter a new guess:");
//     attempts++;
//   } else {
//     guess = prompt("Invalid guess. Please enter a number or 'q' to quit.");
//   }
// }
// if ((guess === "q")) {
//   console.log("Okay! You Quit.");
// } else {
//   console.log(`You got it! It took you ${attempts} guesses!`);
// }

// For Of Loops

// const subreddits = [
//   "cringe",
//   "books",
//   "chickens",
//   "funny",
//   "pics",
//   "soccer",
//   "gunners",
// ];

// for (let sub of subreddits) {
//   console.log(`Visit reddit.com/r/${sub}`);
// }

// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// for (let row of seatingChart) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

// for (let char of "hello world") {
//   console.log(char);
// }

// Iterating over objects

const testScores = {
  keenan: 80,
  amelia: 94,
  marcus: 72,
  olivia: 88,
  liam: 65,
  sophia: 98,
  jackson: 81,
  isabella: 91,
  lucas: 76,
  mia: 85,
  ethan: 59,
  ava: 93,
  noah: 77,
  charlotte: 89,
  elijah: 95,
  harper: 82,
};

// for (let person in testScores) {
//   console.log(`${person} scored ${testScores[person]}`);
// }

let total = 0;
let scores = Object.values(testScores);

for (let score of scores) {
  total += score;
}
console.log(total / scores.length);
