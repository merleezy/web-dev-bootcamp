// NOT AT ALL IMPORTANT TO REMEMBER ANY OF THIS CODE!

const req = new XMLHttpRequest();

req.onload = function () {
  console.log("It Loaded!");
  const data = JSON.parse(this.responseText);
  console.log(data.result.properties.name, data.result.properties.height);
};

req.onerror = function () {
  console.log("Error!");
  console.log(this);
};

req.open("GET", "https://swapi.tech/api/people/1/");
req.send();
