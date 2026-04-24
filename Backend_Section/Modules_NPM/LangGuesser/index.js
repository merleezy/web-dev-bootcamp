const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const arg = process.argv[2];
const langCode = franc(arg);
// console.log("[Debug]".red, langCode);

if (langCode === "und") {
  console.log("Language unknown. Try with more sample text".red);
} else {
  const lang = langs.where("3", langCode);
  if (lang) {
    console.log(`Our best guess is: ${lang.name}`.green);
  } else {
    console.log(
      `Sorry, we couldn't find a language with code "${langCode}".`.red
    );
  }
}
