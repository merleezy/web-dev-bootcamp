const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol that is soooo funny!",
  },
  {
    id: uuid(),
    username: "DatBoiRyan",
    comment: "I like running marathons with my dog!",
  },
  {
    id: uuid(),
    username: "Jessie21",
    comment: "Plz delete your account Todd. Ur not funny",
  },
  {
    id: uuid(),
    username: "whodat",
    comment: "who dat who dat?",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

// you need two routes. one to "get" the form, and the other to "submit" the form
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`OK! Here are your ${qty} ${meat} tacos!`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

/* 
GET /comments - list all comments
GET /comments/new - form to create new comment
POST /comments - create a new comment 
GET /comments/:id - get one comment (using id)
GET /comments/:id/edit - form to edit specific comment
PATCH /comments/:id - update one comment
DELETE /comments/:id - delete one comment
*/
