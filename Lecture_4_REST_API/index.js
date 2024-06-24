const express = require("express");
const path = require("path");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// View engine setup (assuming you have EJS installed)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files setup
app.use(express.static(path.join(__dirname, "public")));

// Sample posts data
let posts = [
  {
    username: "user1",
    content: "This is the first user's content.",
  },
  {
    username: "user2",
    content: "Here is some content for the second user.",
  },
  {
    username: "user3",
    content: "The third user has this content to share.",
  },
  {
    username: "user4",
    content: "Content for the fourth user goes here.",
  },
  {
    username: "user5",
    content: "This is what the fifth user has to say.",
  },
];

// Route to render all posts
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

// Route to render form for new post
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

// Route to handle new post submission
app.post("/posts", (req, res) => {
  console.log("Request Body:", req.body); // Log entire req.body object
  let { username, content } = req.body;
  console.log("Username:", username, "Content:", content); // Check individual fields
  posts.push({ username, content });
  // Respond with a redirect or a confirmation message
  res.redirect("/posts"); // Redirect to the posts page
});

// Default route
app.get("/", (req, res) => {
  res.send("Server is Ready ");
});

// Start server
app.listen(5000, () => {
  console.log("Server is Listening on port 5000");
});
