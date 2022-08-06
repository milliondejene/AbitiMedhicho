// External Dependancies
const boom = require("boom");

// Get Data Models
const person = require("../models/user");
const LeadersStatus = require("../models/leadersStatus");

// @route    Post '/api/leaders'
// @desc     Add a new Leader
// @access   Public

exports.addLeader = async (req) => {
  try {
    const jsonData = JSON.parse(req.body);
    const leader = new person(jsonData);
    const newLeader = await leader.save();
    return newLeader;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.addLeaderStatus = async (req) => {
  try {
    const id = req.param.id;
    const jsonData = JSON.parse(req.body);
    const leadersStatus = new LeadersStatus(jsonData);
    const newleadersStatus = await leadersStatus.save();
    return newleadersStatus;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// // @route    GET '/api/leaders'
// // @desc     Get all Leaders
// // @access   Public

// exports.getLeaders = async () => {
// 	try {
// 		const leaders = await Leader.find()
// 		return leaders
// 	} catch (err) {
// 		throw boom.boomify(err)
// 	}
// }

// // @route    GET '/api/leaders/:id'
// // @desc     Get single Leader by name
// // @access   Public

// exports.getSingleLeader = async req => {
// 	try {
// 		const id = req.params === undefined ? req.id : req.params.id
// 		const leader = await Leader.findById(id)
// 		return leader
// 	} catch (err) {
// 		throw boom.boomify(err)
// 	}
// }

// // @route    PUT '/api/leaders/:id'
// // @desc     Update an existing leader
// // @access   Public

// exports.updateLeader = async req => {
// 	try {
// 		const id = req.params === undefined ? req.id : req.params.id
// 		const updateData = JSON.parse(req.body)
// 		const update = await Leader.findByIdAndUpdate(id, updateData, { new: true })
// 		return update
// 	} catch (err) {
// 		throw boom.boomify(err)
// 	}
// }

// // Delete a car
// exports.deleteLeader = async req => {
// 	try {
// 		const id = req.params === undefined ? req.id : req.params.id
// 		const leader = await Leader.findByIdAndRemove(id)
// 		return leader
// 	} catch (err) {
// 		throw boom.boomify(err)
// 	}
// }
