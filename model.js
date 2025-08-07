const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    blog: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

const Todos = mongoose.model("Todo", todoSchema);
module.exports = Todos;
