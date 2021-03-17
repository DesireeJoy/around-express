const router = require("express").Router();
const path = require("path");
const fs = require("fs").promises;

const dataPath = path.join(__dirname, "../data/cards.json"); // joining the path segments to create an absolute path

router.get("/", (req, res) => {
  fs.readFile(dataPath, { encoding: "utf8" })
    .then((data) => {
      res.status(200).send(JSON.parse(data));
    })
    .catch(() => {
      res.status(500).send({ message: "File not found" });
    });
});

module.exports = router;
