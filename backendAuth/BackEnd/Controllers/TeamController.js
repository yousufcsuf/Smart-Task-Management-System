const TeamModel = require("../Models/Team");
const UserModel = require("../Models/User");
//HERE you write the logic for the routes
const createteam = async (req, res) => {
  try {
    //const loggedUser = localStorage.getItem("loggedInUser");
    const loggedUser = "no user";
    console.log(loggedUser);
    const { name, description, users, dueDate, teamOwner } = req.body;
    console.log("payload", req.body);
    console.log(req.teamOwner);
    //helps to encrpt the password
    const newTeam = new TeamModel({
      name,
      description,
      users,
      teamOwner,
      dueDate,
    });
    console.log("Model created !");
    //creates the record
    await newTeam.save();
    //response
    res.status(201).json({
      message: "Team created successfully",
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
const allteams = async (req, res) => {
  try {
    const allDocs = await TeamModel.find();
    console.log(allDocs);
    //response
    res.status(201).json({
      message: "sent all documents",
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
//LOGIC TO FIND ALL THE USERS
const allusers = async (req, res) => {
  try {
    const allDocs = await UserModel.find();
    console.log(allDocs);
    //response
    res.status(201).json({
      message: "sent all documents",
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
module.exports = { createteam, allteams, allusers };
