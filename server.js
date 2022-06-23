// Require the fastify framework and instantiate it

const fastify = require('fastify')({
    logger: true
})

// Require mongoose module for database

const mongoose = require('mongoose')

//connect to DB

mongoose
        .connect('mongodb+srv://milliondejene:my_password@abiti-medhicho.19hiw.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>console.log('MongoDB Connected.. :)'))
        .catch(err => console.log(err))


module.exports = fastify        


