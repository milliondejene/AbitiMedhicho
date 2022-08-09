// External Dependancies
const boom = require('boom')

// // Get Data Models
// const Owner = require('../models/owner')
const Leader = require('../models/user')
const ownerStatus = require('../models/ownersStatus')

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
    console.log(req.params.id)
	try {
		const id = req.params.id
		const leader = await Leader.findById(id)
		return leader
	} catch (err) {
		throw boom.boomify(err)
	}
}

// ADD owner Status
exports.addOwnerStatus = async req => {
    console.log(req.params.id)
    try {
		// const jsonData =JSON.parse(req.body)
		const ownerStatus = new ownerStatus(req.body)
		const newOwnerStatus = await ownerStatus.save()
		return newOwnerStatus
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Get owner Status
exports.getOwnerStatus = async req => {
    console.log(req.params.id)
	try {
		const id = req.params.id
		const leader = await Leader.findById(id)
		return leader
	} catch (err) {
		throw boom.boomify(err)
	}
}

