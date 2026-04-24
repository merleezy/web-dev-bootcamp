const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

button.addEventListener("click", (e) => {
  const { color, brightness } = randomColor();
  container.style.backgroundColor = color;
  container.style.color = brightness < 120 ? "white" : "black";
  e.stopPropagation(); // stops event bubbling
});

container.addEventListener("click", () => {
  container.classList.toggle("hide");
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
