const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

  return {
    color: `rgb(${r}, ${g}, ${b})`,
    brightness,
  };
};

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", colorize);
}

const h1s = document.querySelectorAll("h1");
for (let h1 of h1s) {
  h1.addEventListener("click", colorize);
}

function colorize() {
  const { color, brightness } = randomColor();
  this.style.backgroundColor = color;

  this.style.color = brightness < 128 ? "white" : "black";
}
