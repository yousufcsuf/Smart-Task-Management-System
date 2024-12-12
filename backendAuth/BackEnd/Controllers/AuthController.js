const UserModel = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
JWT_SECRET = "secret-123";
//HERE you write the logic for the routes
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User already exist, you can login", success: false });
    }
    //helps to encrpt the password
    const userModel = new UserModel({ name, email, password });
    userModel.password = await bcrypt.hash(password, 10);
    //creates the record
    await userModel.save();
    //response
    res.status(201).json({
      message: "signup successfully",
      success: true,
    });
  } catch (err) {
    //response
    res.status(500).json({
      message: err,
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const errorMsg = "Auth failed email or password is wrong";
    const user = await UserModel.findOne({ email });
    //localStorage.setItem("loggedInUser", user.name);
    console.log("user information: ", user);
    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });
    }
    //decrypt password for matching
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res
        .status(403)
        .json({ message: "Password did not match", success: false });
    }
    //if password matches then assign a jwt token
    const jwtToken = jwt.sign({ email: user.email, _id: user.id }, JWT_SECRET, {
      expiresIn: "24h",
    });

    //response
    res.status(200).json({
      message: "login successfully",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (err) {
    //response
    res.status(500).json({
      message: err,
      success: false,
    });
  }
};

module.exports = { signup, login };
