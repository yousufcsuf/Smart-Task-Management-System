const mongoose = require("mongoose");
const mongo_url = "mongodb://localhost:27017/db";

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log("MonoDB Connection Error", err);
  });
