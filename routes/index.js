// Import our Controllers
// const leaderController = require('../controllers/leaderController')
const ownerController = require('../controllers/ownerController')
const userController = require("../controllers/userController");
const constantsAPI = require("../utils/constants");

const pubicRoutes = [constantsAPI.API_USER, constantsAPI.API_LOGIN];

const routes = [
  //User Route
  {
    method: "POST",
    url: constantsAPI.API_USER,
    // schema: leaderController.addCarSchema,
    handler: userController.registerUser,
  },
  {
    method: "GET",
    url: constantsAPI.API_CURRENT_USER,
    // schema: leaderController.addCarSchema,
    handler: userController.currentUser,
  },
  {
    method: "POST",
    url: constantsAPI.API_LOGIN,
    // schema: leaderController.addCarSchema,
    handler: userController.loginUser,
  },


  //Owner Route
  {
    method: 'POST',
    url: constantsAPI.API_LEADER,
    // schema: leaderController.addCarSchema,
    handler: ownerController.addLeader
  },
  {
    method: 'GET',
    url: constantsAPI.API_LEADER,
    // schema: leaderController.addCarSchema,
    handler: ownerController.getLeaders
  },
];
module.exports = async function (fastify, opts) {
  // Loop over each route
  routes.forEach((route, index) => {
    if (pubicRoutes.includes(route.url)) {
      fastify.route(route);
    } else {
      fastify.route({ ...route, onRequest: [fastify.authenticate] });
    }
  });
};



  // {
  //   method: 'POST',
  //   url: '/api/leaders/status',
  //   // schema: leaderController.addCarSchema,
  //   handler: leaderController.addLeaderStatus
  // },

  // {
  //   method: 'GET',
  //   url: '/api/leaders',
  //   handler: leaderController.getLeaders
  // },
  // {
  //   method: 'GET',
  //   url: '/api/leaders/:id',
  //   handler: leaderController.getSingleLeader
  // },
  // {
  //   method: 'PUT',
  //   url: '/api/leaders/:id',
  //   handler: leaderController.updateLeader
  // },
  // {
  //   method: 'DELETE',
  //   url: '/api/leaders/:id',
  //   handler: leaderController.deleteLeader
  // },

  // // Owner Route

  // {
  //   method: 'POST',
  //   url: '/api/owner',
  //   handler: ownerController.addOwner
  // },
  // {
  //   method: 'GET',
  //   url: '/api/owner',
  //   handler: ownerController.getOwner
  // },
  // {
  //   method: 'GET',
  //   url: '/api/owner/:id',
  //   handler: ownerController.getSingleOwner
  // },
  // {
  //   method: 'GET',
  //   url: '/api/ownerleader/:id',
  //   handler: ownerController.getOwnerLeaders
  // },

  // // // Service Route
  // // {
  // //   method: 'GET',
  // //   url: '/api/leaderStatus',
  // //   handler: ownerController.getLeaderStatus
  // // },

