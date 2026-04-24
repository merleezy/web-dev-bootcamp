// getElementByID
const banner = document.getElementById("banner");
const toc = document.getElementById("toc");

// getElementsByTagName
const images = document.getElementsByTagName("img");

// for (let img of images) {
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
// }

// getElementsByClassName
const squareImages = document.getElementsByClassName("square");

// for (let img of squareImages) {
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
// }

// querySelector and querySelectorAll
document.querySelector("p");
document.querySelector("#banner");
document.querySelector(".square");

document.querySelector("img:nth-of-type(2)");
document.querySelector("a[title='Java']");

const links = document.querySelectorAll("p a");

// for (let link of links) {
//   console.log(link.href);
// }
