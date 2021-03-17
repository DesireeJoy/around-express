const router = require("express").Router();
const path = require("path");
const fs = require("fs").promises;

const users = require("../data/users");

const dataPath = path.join(__dirname, "../data/users.json"); // joining the path segments to create an absolute path

router.get("/", (req, res) => {
  fs.readFile(dataPath, "utf8")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(() => {
      res.status(500).send({ message: "File not found" });
    });
});

router.get("/:id", (req, res) => {
  const selectedUser = users.find((user) => user._id === req.params.id);
  if (!selectedUser) {
    res.status(404).send({ message: "User ID not found" });
  } else {
    res.send(selectedUser);
  }
});

module.exports = router;
