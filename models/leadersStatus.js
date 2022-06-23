
// External Dependancies
const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const leadersStatusSchema = new mongoose.Schema({
  leader_status_id: ObjectId,
  name: String,
  date: String
})

module.exports = mongoose.model("LeadersStatus", leadersStatusSchema)