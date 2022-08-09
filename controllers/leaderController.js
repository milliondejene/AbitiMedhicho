const leaderStatus = require('../models/leadersStatus')

// External Dependancies
const boom = require("boom");

// ADD Leader Status
exports.addLeaderStatus = async req => {
	try {
		// const jsonData =JSON.parse(req.body)
		const leaderStatus = new leaderStatus(req.body)
		const newLeaderStatus = await leaderStatus.save()
		return newLeaderStatus
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Get Leader Status
exports.getLeaderStatus = async req => {
  console.log(req.params.id)
try {
  const id = req.params.id
  const leader = await Leader.findById(id)
  return leader
} catch (err) {
  throw boom.boomify(err)
}
}


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
