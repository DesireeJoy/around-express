const User = require("../models/user");
const express = require("express");
const router = express.Router();

function getUsers(req, res) {
  return User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch();
}

// function getOneUser(req, res) {
//   return User.findById({ _id: req.params.id })
//     .then((user) => {
//       if (user) {
//         return res.status(200).send(user);
//       }
//       return res.status(404).send({ message: "User ID not found" });
//     })
//     .catch((err) => {
//       if (err.name === "CastError") {
//         return res
//           .status(400)
//           .send({ message: "This is not the card you are looking for" });
//       }
//       return res.status(500).send({ message: "Internal Server Error" });
//     });
// }

function createUser(req, res) {
  const { name, about, avatar } = req.body;
  return User.create({ name, about, avatar })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res
          .status(400)
          .send({ message: "This is not the correct card" });
      }
      return res.status(500).send({ message: "Internal Server Error" });
    });
}
// function updateUser(req, res) {
//   const { name, about } = req.body;
//   return User.findByIdAndUpdate(
//     req.params.id,
//     { name, about },
//     { new: true, runValidators: true }
//   )
//     .then((user) => {
//       res.status(200).send(user);
//     })
//     .catch((err) => {
//       if (err.name === "CastError") {
//         return res
//           .status(400)
//           .send({ message: "This is not the card you are looking for" });
//       }
//       return res.status(500).send({ message: "Internal Server Error" });
//     });
// }
// function updateAvatar(req, res) {
//   const { avatar } = req.body;
//   return User.findByIdAndUpdate(
//     req.params.id,
//     { avatar },
//     { new: true, runValidators: true }
//   )
//     .then((user) => {
//       res.status(200).send(user);
//     })
//     .catch((err) => {
//       if (err.name === "CastError") {
//         return res
//           .status(400)
//           .send({ message: "This is not the card you are looking for" });
//       }
//       return res.status(500).send({ message: "Internal Server Error" });
//     });
// }

module.exports = {
  // getOneUser,
  getUsers,
  createUser,
};
