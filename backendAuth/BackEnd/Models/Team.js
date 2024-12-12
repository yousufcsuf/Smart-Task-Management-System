const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  users: {
    type: Array,
    default: [], // Correct syntax for the default value
  },

  teamOwner: {
    type: String,
  },
});

const TeamModel = mongoose.model("teams", TeamSchema);
module.exports = TeamModel;
