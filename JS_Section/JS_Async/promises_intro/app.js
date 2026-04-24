// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// fakeRequestCallback(
//   "books.com/page1",
//   function (data) {
//     console.log("Success!");
//     console.log(data);
//     fakeRequestCallback(
//       "books.com/page2",
//       function (data) {
//         console.log("Success!");
//         console.log(data);
//         fakeRequestCallback(
//           "books.com/page3",
//           function (data) {
//             console.log("Success!");
//             console.log(data);
//           },
//           function (err) {
//             console.log("Error:", err);
//           }
//         );
//       },
//       function (err) {
//         console.log("Error:", err);
//       }
//     );
//   },
//   function (err) {
//     console.log("Error:", err);
//   }
// );

// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then(() => {
//     console.log("It worked! (1)");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("It worked! (2)");
//         fakeRequestPromise("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("It worked! (3)");
//           })
//           .catch(() => {
//             console.log("Oh no! Error! (3)");
//           });
//       })
//       .catch(() => {
//         console.log("Oh no! Error! (2)");
//       });
//   })
//   .catch(() => {
//     console.log("Oh no! Error! (1)");
//   });

fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("It worked! (1)");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log("It worked! (2)");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then((data) => {
    console.log("It worked! (3)");
    console.log(data);
  })
  .catch((err) => {
    console.log("Error!", err);
  });
