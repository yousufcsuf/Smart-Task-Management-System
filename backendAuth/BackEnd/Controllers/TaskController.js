const TaskModel = require("../Models/Task");

//HERE you write the logic for the routes
const createtask = async (req, res) => {
  try {
    const { title, description, status, dueDate, taskOwner } = req.body;
    console.log("payload", req.body);
    console.log(req.user);
    console.log("dueDate", typeof dueDate);

    //helps to encrpt the password
    const newTask = new TaskModel({
      title,
      description,
      status,
      dueDate: dueDate,
      taskOwner,
    });
    console.log("Model created !");
    //creates the record
    await newTask.save();
    //response
    res.status(201).json({
      message: "Task created successfully",
      success: true,
    });
  } catch (err) {
    //response
    console.log(err);
    res.status(500).json({
      message: err,
      success: false,
    });
  }
};

//LOGIC TO FIND ALL THE TASKS
const alltasks = async (req, res) => {
  try {
    const allDocs = await TaskModel.find();
    console.log(allDocs);
    //response
    res.status(201).json({
      message: "Task created successfully",
      success: true,
      data: allDocs,
    });
  } catch (err) {
    //response
    console.log(err);
    res.status(500).json({
      message: err,
      success: false,
    });
  }
};
module.exports = { createtask, alltasks };
