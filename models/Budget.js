const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  date: { type: String, required: true },
  name: { type: String, required: true },
  from: { type: String, required: true },
  amount: { type: Number, required: true },
  tags: [{ type: String }],
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
