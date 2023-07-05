const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  taskId: {
    type: String,
    required: [true, "task_idを入れてください"],
  },
  isCorrect: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Exam", ExamSchema);
