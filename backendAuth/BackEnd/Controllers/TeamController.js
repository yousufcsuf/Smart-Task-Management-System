const TeamModel = require("../Models/Team");
const UserModel = require("../Models/User");
const { GoogleGenerativeAI } = require("@google/generative-ai");
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

const genReport = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { guidline } = req.body;
    console.log("queries for guideline", guidline);

    const genAI = new GoogleGenerativeAI(
      "AIzaSyBkk819n8FXtsKt8yKNZK5zxso6wu3_4ZQ"
    );

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const query = guidline.description;
    const prompt =
      query +
      " please make it a step by step instruction and number them, dont make it more than 5lines ";

    const result = await model.generateContent(prompt);
    const genReport = result.response.text();

    //response
    res.status(201).json({
      message: "sent generative AI Assistant",
      success: true,
      data: genReport,
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
module.exports = { createteam, allteams, allusers, genReport };
