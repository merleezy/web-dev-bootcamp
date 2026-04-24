const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("You clicked me!");
  console.log("Good job!");
};

function scream() {
  console.log("AHHHHHHHHHHHHH!");
  console.log("STOPPPPP!");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
  alert("You clicked the h1!");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", () => {
  alert("CLICKED!");
});

function twist() {
  console.log("TWIST");
}

function shout() {
  console.log("SHOUT");
}

const tasButton = document.querySelector("#tas");

// tasButton.onclick = twist;
// tasButton.onclick = shout;  // doesn't display both, only shout.

tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout);
