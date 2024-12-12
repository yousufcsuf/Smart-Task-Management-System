const { createteam } = require("../Controllers/TeamController");
const { allteams } = require("../Controllers/TeamController");
const { allusers } = require("../Controllers/TeamController");
const router = require("express").Router();
router.post("/createteam", createteam);
router.get("/allteams", allteams);
router.get("/allusers", allusers);

module.exports = router;
