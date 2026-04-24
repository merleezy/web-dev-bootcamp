// fetch("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("Resolved!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Here is your data:", data.result.properties);
//   })
//   .catch((e) => {
//     console.log("Error!", e);
//   });

// fetch("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("Resolved!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Here is your request:", data.result.properties);
//     return fetch("https://swapi.tech/api/people/2/");
//   })
//   .then((res => {
//     console.log("Second request resolved!");
//     return res.json();
//   }))
//   .then((data => {
//     console.log("Here is your second request:", data.result.properties);
//   }))
//   .catch((e) => {
//     console.log("Error!", e);
//   });

const loadStarWarsPeople = async () => {
  try {
    const res1 = await fetch("https://swapi.tech/api/people/1/");
    const data1 = await res1.json();
    console.log(data1.result.properties);
    const res2 = await fetch("https://swapi.tech/api/people/2/");
    const data2 = await res2.json();
    console.log(data2.result.properties);
  } catch (error) {
    console.log("Error!", error);
  }
};

loadStarWarsPeople();

// better and faster example using Promise.all()
const loadStarWarsPeople2 = async () => {
  // 1. Fire off both requests instantly. Don't 'await' yet!
  const promise1 = fetch("https://swapi.tech/api/people/1/");
  const promise2 = fetch("https://swapi.tech/api/people/2/");

  // 2. Wait for BOTH to finish (in parallel)
  const [res1, res2] = await Promise.all([promise1, promise2]);

  // 3. Process data
  const data1 = await res1.json();
  const data2 = await res2.json();

  console.log(data1.result.properties);
  console.log(data2.result.properties);
};

loadStarWarsPeople2();
