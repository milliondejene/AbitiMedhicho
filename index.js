//import sever

const fastify = require("./server");
require("dotenv").config();
// const passport = require('passport');
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

const routes = require("./routes");

const swagger = require("./config/swagger");

// Register jwt plugin
fastify.register(require("./plugins/jwt"));

fastify.register(routes);
// Register SwaggerS

fastify.register(require("@fastify/swagger"), swagger.options);
// fastify.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
//     try {
//       var json = JSON.parse(body)
//       done(null, json)
//     } catch (err) {
//       err.statusCode = 400
//       done(err, undefined)
//     }
//   })

//passport config
// require('./config/passport')(passport);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.swagger();
    fastify.log.info(`server listening on 3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

//run the server
start();
