const express = require("express");
const router = express.Router();

const {
  getCards,
  deleteCard,
  createCard,
  likeCard,
  unlikeCard,
} = require("../controllers/cardController");

router.get("/", getCards);
router.post("/", createCard);
router.patch("/:cardId/likes", likeCard);
router.delete("/:cardId/likes", unlikeCard);
router.delete("/:cardId", deleteCard);

module.exports = router;
