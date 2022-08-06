// External Dependancies
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const leadersStatusSchema = new mongoose.Schema({
  //------------------------leader checklist---------------------------------------------------------------
  leader: {
    type: ObjectId,
    ref: "person",
  },
  leaderRecievedShafa: Number,
  soldShafa_Gebi: Number,
  keri: Number,
  leftOverShafa: Number,
  employeSalary: Number,
  addFactors: Number,

  // totalStatus in a day: Number,
  // terf: Number,
  // kisara: Number, in a day
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("LeadersStatus", leadersStatusSchema);
