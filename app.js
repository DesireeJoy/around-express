const express = require("express");

const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

// listen to port 3000
const { PORT = 3000 } = process.env;
const app = express();

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);
app.get("*", (req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
});
