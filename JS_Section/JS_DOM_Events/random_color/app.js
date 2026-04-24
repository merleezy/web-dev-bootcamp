const btn = document.querySelector("#colorBtn");
const h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  const { color, brightness } = randomColor();
  document.body.style.backgroundColor = color;
  h1.textContent = color;

  document.body.style.color = brightness < 128 ? "white" : "black";
});

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
