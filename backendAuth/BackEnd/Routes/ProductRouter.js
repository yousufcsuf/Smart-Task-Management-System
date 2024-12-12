const { ensureAuthenticated } = require("../Middlewares/Auth");
const router = require("express").Router();
router.get("/", ensureAuthenticated, (req, res) => {
  //helps to reduce database server call
  console.log("----end user details------", req.user);
  res.status(200).json([
    { name: "Iphone", price: "35000" },
    { name: "Sony", price: "135000" },
    { name: "Xbox", price: "145000" },
  ]);
});

module.exports = router;
