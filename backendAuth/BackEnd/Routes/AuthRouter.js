const { loginValidation } = require("../Middlewares/AuthValidation");
const { signupValidation } = require("../Middlewares/AuthValidation");
const { signup } = require("../Controllers/AuthController");
const { login } = require("../Controllers/AuthController");
const router = require("express").Router();

router.post("/login", loginValidation, login);

router.post("/signup", signupValidation, signup);

module.exports = router;
