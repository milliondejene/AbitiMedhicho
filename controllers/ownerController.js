// // External Dependancies
// const boom = require('boom')

// // Get Data Models
// const Owner = require('../models/owner')
// const Leader = require('../models/leaders')

// // @route    Post '/api/owner'
// // @desc     Add a new Owner
// // @access   Public

// exports.addOwner = async req => {
// 	try {
// 		const jsonData =JSON.parse(req.body)
// 		const owner = new Owner(jsonData)
// 		const newOwner = await owner.save()
// 		return newOwner
// 	} catch (err) {
// 		throw boom.boomify(err)
// 	}
// }

// // Get all owners
// exports.getOwner = async () => {
// 	try {
// 		const owners = await Owner.find()
// 		return owners
// 	} catch (err) {
// 		throw boom.boomify(err)
// 	}
// }

// // Get single owner by ID
// exports.getSingleOwner = async req => {
// 	try {
// 		const id = req.params === undefined ? req.id : req.params.id
// 		const owner = await Owner.findById(id)
// 		return owner
// 	} catch (err) {
// 		throw boom.boomify(err)
// 	}
// }

// // Get single owner's cars
// exports.getOwnerLeaders = async req => {
// 	try {
// 		const id = req.params === undefined ? req.id : req.params.id
// 		const leader = await Leader.find({ owner_id: id })
// 		return leader
// 	} catch (err) {
// 		throw boom.boomify(err)
// 	}
// }
