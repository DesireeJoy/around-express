const express = require("express");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/aroundb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

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
