const boom = require("boom");

const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Load User Model & config key
require("dotenv").config();
// const keys = require("../config/keys");
const User = require("../models/user");

// @route    Post '/api/user'
// @desc     register a new user
// @access   Public

exports.registerUser = async (req, reply) => {
  try {
    await User.findOne({
      email: req.body.email,
    }).then((user) => {
      if (!user) {
        // @desc     Register User
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          owner: true,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            // if (err) throw err;
            newUser.password = hash;
            newUser
              .save() // Save User in Database
              .then((user) => reply.send(user))
              .catch(err);
          });
        });
        return reply;
      } else {
        return reply.send({ email: "email already exist" });
        // reply.code(200).send("ok");
      }
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

// @route    Post '/api/user/login'
// @desc     login user & generate jwt token
// @access   Public

exports.loginUser = async (req, reply) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return reply.send({ email: "user doesnot exist" });
    }
    // CHeck user password
    // use bcrypt password compare
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        //User Match
        // Create Token When User Login
        //Sign Token
        const payload = {
          id: user.id,
          name: user.firstName,
        };

        jwt.sign(
          payload,
          process.env.SECRET_KEY,
          {
            expiresIn: 21600,
          },
          (err, token) => {
            console.log(token);
            reply.send({ success: true, token: "Bearer " + token });
          }
        );
      } else {
        reply.send({ email: "Password Incorrect" });
      }
    });
    return reply;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// @route    GET api/users/current
// @desc     return current user
// @access   Private

exports.currentUser = async (req, reply) => {
  try {
    const user = await User.findById(req.user.id);
    return reply.send(user);
  } catch (err) {
    throw boom.boomify(err);
  }
};
