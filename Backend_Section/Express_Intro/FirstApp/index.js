const express = require("express");
const app = express();
const port = 3000;

// app.use((req, res) => {
//   console.log("We have received a new request!");
//   // res.send({ color: "red" });
//   res.send("<h1>This is my webpage!</h1>");
// });

// the "root" route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the home page!</h1>");
});

// Working with path parameters
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on ${subreddit} subreddit</h1>`);
});

app.post("/cats", (req, res) => {
  res.send("Post request sent to cats!");
});

app.get("/cats", (req, res) => {
  res.send("MEOW!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!");
});

// Working with query strings
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched.");
  } else {
    res.send(`<h1>Search results for: ${q}</h1>`);
  }
});

app.get(/(.*)/, (req, res) => {
  res.send(`I don't know that path...`);
});

// /r/SOMETHINGHERE

// /cats => 'meow'
// /dogs => 'woof
// '/'

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
