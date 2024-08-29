const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Testing this route");
  res.send("This is home route");
});

app.get("/instagram", (req, res) => {
  res.send("This is instagram packages");
});

app.get("/youtube", (req, res) => {
  res.send("This is my youtube channel link");
});

app.get("/login", (req, res) => {
  res.send("This is login page");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>This is twitter page</h1>");
});

app.get("/post", (req, res) => {
  res.send("<h2>This is Post page</h2>");
});

app.get("/comment", (req, res) => {
  res.send("<h3>This is Post page</h3>");
});

app.get("/guptabrand", (req, res) => {
  res.send("<h2>Daal Bhaat</h2>");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
