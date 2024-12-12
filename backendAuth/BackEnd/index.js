const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");
const TaskRouter = require("./Routes/TaskRouter");
const TeamRouter = require("./Routes/TeamRouter");
//helps to create an environment variable
require("dotenv").config();
require("./Models/db");
const PORT = 8080;
app.use(express.json());
app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(bodyParser.json());
//helps to take request from anywhere
app.use(cors());

//Routes
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);
app.use("/tasks", TaskRouter);
app.use("/teams", TeamRouter);

app.listen(PORT, () => {
  console.log("server is running ");
});
