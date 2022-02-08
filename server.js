const express = require("express");
const mongoose = require("mongoose");
const Budget = require("./models/Budget");

const main = async () => {
  // initialize app
  const app = express();

  // set up static assets
  app.use(express.static("public"));

  // set up body parser
  app.use(express.urlencoded({ extended: true }));

  // connect to mongo
  mongoose.connect("mongodb://localhost:27017/fruits", () => {
    console.log("mongoose connected");
  });

  // routes
  app.get("/budgets", async (_req, res) => {
    const budgetItems = await Budget.find();
    res.render("index.ejs", {
      title: "Home",
      budgetItems,
    });
  });

  // form to add a new budget item
  app.get("/budgets/new", (_req, res) => {
    res.render("new.ejs", {
      title: "New",
    });
  });

  // post method to receive the above form and update the database
  app.post("/budgets", async (req, res) => {
    await new Budget(req.body).save();
    res.redirect("/budgets");
  });

  app.get("/budgets/:budgetid", async (req, res) => {
    const { budgetid } = req.params;
    const budgetItem = await Budget.findById(budgetid);
    res.render("show.ejs", {
      title: "Show",
      budgetItem,
    });
  });

  // start server
  app.listen(3000, () => {
    console.log("app listening on port 3000");
  });
};

main().catch((err) => console.log(err));
