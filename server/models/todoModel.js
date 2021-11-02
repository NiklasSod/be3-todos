const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  header: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 40,
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 300,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
});

module.exports = mongoose.model("Todo", todoSchema);