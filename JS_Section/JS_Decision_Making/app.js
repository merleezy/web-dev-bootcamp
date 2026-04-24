// console.log("HELLO FROM THE JS FILE!!");
// let total = Math.floor(Math.random() * 4) + 1;
// if (parseInt(total) === 4) {
//   console.log(`The total is ${total}`);
// } else {
//   console.log(`The total is not 4. It is ${total}`);
// }

// const dayOfWeek = prompt('Enter a day: ').toLowerCase();

// if (dayOfWeek === 'monday') {
//   console.log('UGHHH ITS MONDAYYYY :(');
// } else if (dayOfWeek === 'saturday') {
//   console.log("HELL YEAH!!!! ITS THE WEEKEND BABY!!!");
// } else if (dayOfWeek === 'friday') {
//   console.log("FRIDAYS AFTER WORK ARE FIRE!!!!");
// } else {
//   console.log("Meh.");
// }

/* 
0-5 - FREE
5-12 CHILD $10
12 - 65 ADULT $20
65+ Senior $10
*/

// const age = 22;

// if (age < 5) {
//   console.log("You are a baby. Free tickets.");
// } else if (age < 12) {
//   console.log("You are a child. $10 tickets.");
// } else if (age < 65) {
//   console.log("You are an adult. $20 tickets.");
// } else {
//   console.log("You are a dinosaur. $10 tickets.");
// }

/*
Password must be 6+ chars, and can't include spaces.
*/

// const password = prompt("Enter a new password:");

// if (password.length >= 6) {
//   if (password.indexOf(' ') === -1) {
//     console.log("valid password.");
//   } else {
//     console.log("password can't have spaces.")
//   }
// } else {
//   console.log('password too short.')
// }

// Truthy & Falsy (0, '', NaN, undefined, null, false)

// const userInput = prompt("Enter something: ");

// if (userInput) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// Logical Operators

// const password = prompt("Enter your password");
// if (password.length >= 6 && password.indexOf(' ') == -1) {
//   console.log("Valid password");
// } else {
//   console.log("Invalid format for password.");
// }

// const age = 90;
// if ((age < 5 && age >= 0) || age >= 65) {
//   console.log("Free");
// } else if (age < 10 && age > 5) {
//   console.log("$10");
// } else if (age < 65 && age > 10) {
//   console.log("$20");
// } else {
//   console.log("Invalid age.");
// }

// const firstName = prompt("Enter your first name");
// if (!firstName) {
//   firstName = prompt("TRY AGAIN!");
// }

// Switch statements

// const day = 3;
// switch (day) {
//   case 1:
//     console.log("MONDAY");
//     break;
//   case 2:
//     console.log("TUESDAY");
//     break;
//   case 3:
//     console.log("WEDNESDAY");
//     break;
//   case 4:
//     console.log("THURSDAY");
//     break;
//   case 5:
//     console.log("FRIDAY");
//     break;
//   case 6:
//   case 7:
//     console.log("WEEKEND");
//     break;
//   default:
//     console.log("I DON'T KNOW");
// }
