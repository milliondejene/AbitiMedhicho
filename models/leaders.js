// Mongoose External Dependancies
const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const leaderSchema = new mongoose.Schema({
  leaderfName: String,
  leaderlName: String,
  phone : Number,
  age: Number,
  leader_id: ObjectId
})

module.exports = mongoose.model("Leader", leaderSchema)