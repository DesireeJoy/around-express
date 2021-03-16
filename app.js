mport Express from "express";
import Random from "./random.js";
const app = Express();
const { PORT= 3000} = app;

app.use(Express.urlencoded({ extended: true }));




app.get("/user/:id", mid, (req, res) => {
  res.json(
    Random.find((user) => {
      return +req.params.id === user.id;
    })
  );
});
app.use(express.static(path.join(__dirname, "public")));


app.post("/add", (req, res) => {
  console.log(req);
  res.send(req.body);
  res.sendStatus(200);
});

app.listen(port, () => console.log("Listening on Port 3000"));
