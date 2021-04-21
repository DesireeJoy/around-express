// const router = require("express").Router();
// const path = require("path");
// const fs = require("fs").promises;

// const dataPath = path.join(__dirname, "../data/cards.json"); // joining the path segments to create an absolute path

// router.get("/", (req, res) => {
//   fs.readFile(dataPath, { encoding: "utf8" })
//     .then((data) => {
//       res.status(200).send(JSON.parse(data));
//     })
//     .catch(() => {
//       res.status(500).send({ message: "File not found" });
//     });
// });

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getCards,
  deleteCard,
  createCard,
} = require("../controllers/cardController");

router.get("/cards", getCards);
router.post("/cards", createCard);
router.delete("/cards/:cardId", deleteCard);

module.exports = router;
