const Card = require("../models/card");

function getCards(req, res) {
  Card.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch();
}

function deleteCard(req, res) {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: "Card Not Found" });
      }
      return res.status(403).send({ message: "not allowed" });
      res.status(200).send({ message: "Deleted Succesfully" });
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(500).send({ message: "Internal Server Error" });
      }
      return res
        .status(400)
        .send({ message: "This is not the card you are looking for" });
    });
}

function createCard(req, res) {
  const { name, link } = req.body;
  Card.create({
    name,
    link,
    owner: req.user._id,
  })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(500).send({ message: "Internal Server Error" });
      }
      return res.status(400).send({ message: "Cannot create the card" });
    });
}

module.exports = {
  getCards,
  deleteCard,
  createCard,
};
