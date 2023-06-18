const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "英単語を入れてください"],
    trim: true,
    maxlength: [20, "英単語は20文字まで"],
  },
  jaName: {
    type: String,
    require: [true, "日本語訳を入れてください"],
    trim: true,
    maxlength: [30, "日本語訳は30文字まで"],
  },
  speech: {
    type: String,
    require: [true, "品詞を選択してください"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);