const express = require("express");
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const usersRouter = require("./routes/usersRoute");
const todoRouter = require("./routes/todoRoute");

const app = express();

app.use(cors());
// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

const uri = process.env.DB_URI;
const port = 5000 || 8000;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
 .then(()=>app.listen(port,()=>console.log(`server running on port ${port}`)))
    
  .catch((error) => console.log(error));




app.use("/api/todoRoute", todoRouter);
app.use("/api/usersRoute", usersRouter);
module.exports = app;
