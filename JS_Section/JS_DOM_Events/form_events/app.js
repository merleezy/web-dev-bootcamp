const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const ul = document.querySelector("#cats");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newLi = document.createElement("li");
  const catName = input.value;

  newLi.textContent = catName;
  input.value = "";

  ul.append(newLi);
});
