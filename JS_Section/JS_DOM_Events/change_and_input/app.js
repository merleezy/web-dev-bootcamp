const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener("change", (e) => {
//   console.log("sdjksfdkj");
// });

input.addEventListener("input", (e) => {
  h1.textContent = input.value;
});
