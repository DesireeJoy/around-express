const express = require("express");
const router = require("express").Router();
const users = require("../data/users");

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  let selectedUser = users.find((user) => user._id == req.params.id);
  if (!selectedUser) {
    res.status(404).send({ message: "User ID not found" });
    return;
  } else {
    res.send(selectedUser);
  }
});

module.exports = router;
