// External Dependancies
const boom = require('boom')

// // Get Data Models
// const Owner = require('../models/owner')
const Leader = require('../models/user')

// @route    Post '/api/leader'
// @desc     Add a new leader
// @access   Private

exports.addLeader = async req => {
	try {
		// const jsonData =JSON.parse(req.body)
		const leader = new Leader({...req.body, owner: false, supervisor: req.user.id })
		const newLeader = await leader.save()
		return newLeader
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Get all leaders
exports.getLeaders = async () => {
	try {
		const leaders = await Leader.find({owner: false})
		return leaders
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Get single leaders by ID
exports.getSingleLeader = async req => {
	try {
		const id = req.user.id
		const leader = await Leader.findById(id)
		return leader
	} catch (err) {
		throw boom.boomify(err)
	}
}

