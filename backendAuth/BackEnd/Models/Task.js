const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
  },
  dueDate: {
    type: String,
  },
  taskOwner: {
    type: String,
  },
});

const TaskModel = mongoose.model("tasks", TaskSchema);
module.exports = TaskModel;
