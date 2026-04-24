// innerHTML, textContent, innerText
const allLinks = document.querySelectorAll("a");
const para = document.querySelector("p");
// para.innerHTML;
// para.innerText;
// para.textContent;

// for (let link of allLinks) {
//   link.innerText = "I AM A LINK";
// }

// document.querySelector("h1").innerHTML += "<i>asdfghjkl</i>";

// Attributes
// document.querySelector("#banner").id = "chicken";
document.querySelector("a").href;
document.querySelector("a").title;

const firstLink = document.querySelector("a");
firstLink.href; // gets the value from the JavaScript object
firstLink.getAttribute("href"); // gets the value directly from the HTML
firstLink.setAttribute("href", "http://www.google.com");

// Changing styles
const h1 = document.querySelector("h1");
h1.style;
h1.style.color = "green";
h1.style.fontSize = "3em";
h1.style.border = "2px solid pink";

for (let link of allLinks) {
  link.style.color = "rgba(0, 65, 162, 1)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

window.getComputedStyle(h1).fontSize;

const h2 = document.querySelector("h2");
// h2.setAttribute("class", "purple");
// h2.setAttribute("class", "border"); // overrides purple, doesn't combine

let currentClasses = h2.getAttribute("class");
// h2.setAttribute("class", `${currentClasses} purple`); // annoying way, but works

h2.classList;
h2.classList.add("purple");
h2.classList.add("border");
h2.classList.remove("border");
h2.classList.toggle("purple");
h2.classList.contains("purple");

// Traversing Parent/Child/Sibling
const firstBold = document.querySelector("b");
firstBold.parentElement; // <p>
firstBold.parentElement.parentElement; // <body>

const paragraph = firstBold.parentElement;
paragraph.childElementCount; // return number of children
paragraph.children; // return an HTMLCollection of elements (no array methods, but can use indices)
paragraph.childNodes; // returns all nodes

const squareImg = document.querySelector(".square");
squareImg.previousSibling;
squareImg.nextSibling; // returns the corresponsing "node" (new line or white space counts)
squareImg.nextElementSibling;
squareImg.previousElementSibling; // returns the corresponding element, ignoring whitespace nodes

// Append and AppencChild
const newImg = document.createElement("img");
newImg.src =
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
document.body.appendChild(newImg);
newImg.classList.add("square");

const newH3 = document.createElement("h3");
newH3.textContent = "I am new!";
document.body.appendChild(newH3);

const p = document.querySelector("p");
p.append("I am new text yaaaaaaaaaaaayyy!!!", "other new text!!!");
const newB = document.createElement("b");
newB.append("Hi!");
p.prepend(newB);

const newH2 = document.createElement("h2");
newH2.append("Are adorable chickens");
const firstH1 = document.querySelector("h1");
firstH1.insertAdjacentElement("afterend", newH2);

// firstH1.after(newH3);
// firstH1.before(newH2);

// removeChild and remove
const firstLi = document.querySelector("li");
// firstLi.parentElement.removeChild(firstLi) // old way to remove

// firstLi.remove(); // modern way to remove 
