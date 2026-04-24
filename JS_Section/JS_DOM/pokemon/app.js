// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const fragment = document.createDocumentFragment();

for (let i = 1; i < 1026; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");

  const label = document.createElement("span");
  label.textContent = `#${i}`;

  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;

  pokemon.append(newImg, label);
  fragment.append(pokemon);
}

container.append(fragment);