// External Dependancies
const mongoose = require("mongoose");
// const ownersStatus = require('./ownersStatus');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String, //not required
  owner: Boolean,

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
