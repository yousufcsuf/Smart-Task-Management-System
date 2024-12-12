const { ensureAuthenticated } = require("../Middlewares/Auth");
const { createtask } = require("../Controllers/TaskController");
const { alltasks } = require("../Controllers/TaskController");
const router = require("express").Router();
router.post("/createtask", createtask);
router.get("/alltasks", alltasks);

module.exports = router;
