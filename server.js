const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const userRoute = require("./routes/usersRoute");
const todoRoute = require("./routes/todoRoute");
const mongoose = require("mongoose");

app.use(
  cors({
    origin: "*",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/be3-todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const port = process.env.PORT || 3001;

app.use("/todo", todoRoute);
app.use("/", userRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
