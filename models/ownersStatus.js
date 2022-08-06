// External Dependancies
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const ownersStatusSchema = new mongoose.Schema({
  //------------------------owner checklist---------------------------------------------------------------
  priceOfShafa: Number,
  totalShafaRecevied: Number,
  date: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("ownersStatus", ownersStatusSchema);
