const mongoose = require("mongoose");

//create Schema
const TodoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todo", TodoItemSchema);
