const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.sign_up = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      User.find({ username: req.body.username }).then(async user => {
        if (user.length >= 1) {
          return res.status(409).json({
            data: {
              message: "Username has been signed up already!"
            }
          });
        } else {
          if (err) {
            return res.status(500).json({
              data: {
                error: err
              }
            });
          } else {
            const user = new User({
              username: req.body.username,
              password: hash
            });
  
            user
              .save()
              .then(result => {
                res.status(201).json({
                  data: {
                    message: "User created!",
                    user
                  }
                });
              })
              .catch(err => {
                res.status(500).json({
                  data: {
                    message: err,
                    result
                  }
                });
              });
          }
        }
      });
    });
  };
  
  exports.login_in = (req, res, next) => {
    User.find({ username: req.body.username })
      .then(user => {
        if (user.length < 1) {
          return res.status(401).json({
            data: {
              message: "Sorry, the account is not exist."
            }
          });
        }
        bcrypt.compare(
          req.body.password,
          user[0].password,
          async (err, result) => {
            if (err) {
              return res.status(401).json({
                data: {
                  message: "User name or password incorrect!"
                }
              });
            } else if (result) {
              const token = jwt.sign(
                {
                  username: user[0].username,
                  userId: user[0]._id
                },
                process.env.JWT_KEY,
                {
                  expiresIn: "1h"
                }
              );
              console.log(token);
  
              return res.status(200).json({
                data: {
                  message: "login in successful!",
                  token: token
                }
              });
            }
            res.status(401).json({
              data: {
                message: "Sorry, user name or password incorrect!"
              }
            });
          }
        );
      })
      .catch(err => {
        res.status(500).json({
          data: {
            message: "The server error!" + err
          }
        });
      });
  };
  