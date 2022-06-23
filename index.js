//import sever

const fastify = require('./server')
// Import external dependancies
// const gql = require('fastify-gql')
// Import GraphQL Schema
// const schema = require('./schema')
// Register Fastify GraphQL
// fastify.register(gql, {
// //    schema,
//    graphiql: true
// })

//import Routes

const routes = require('./routes')

const swagger = require('./config/swagger')

// Register SwaggerS

fastify.register(require('@fastify/swagger'), swagger.options)

// Loop over each route
routes.forEach((route, index) => {
	fastify.route(route)
})

const start = async () =>{
    try{
        await fastify.listen({ port: 3000 })
        fastify.swagger()
        fastify.log.info(`server listening on 3000`)
    }catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}
  

//run the server
start()