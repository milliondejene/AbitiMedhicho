// External Dependancies
const mongoose = require("mongoose");
// const ownersStatus = require('./ownersStatus');
const ObjectId = mongoose.Schema.Types.ObjectId;
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String, //not required
  owner: Boolean,
  supervisor: {
    type: ObjectId,
    ref: "User",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
