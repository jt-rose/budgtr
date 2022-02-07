const express = require("express");
const mongoose = require("mongoose");
const Budget = require("./models/Budget");

const main = async () => {
  // initialize app
  const app = express();

  // set up static assets
  app.use(express.static("public"));

  // connect to mongo
  mongoose.connect("mongodb://localhost:27017/fruits", () => {
    console.log("mongoose connected");
  });

  // routes
  app.get("/budgets", async (_req, res) => {
    res.render("index.ejs");
  });

  // form to add a new budget item
  app.get("/budgets/new", (_req, res) => {
    res.send("add new item");
  });

  // post method to receive the above form and update the database
  app.post("/budgets", (req, res) => {
    res.send("posted!");
  });

  app.get("/budgets/:id", async (req, res) => {
    res.send("individual item");
  });

  // start server
  app.listen(3000, () => {
    console.log("app listening on port 3000");
  });
};

main().catch((err) => console.log(err));
