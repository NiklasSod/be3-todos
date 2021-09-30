const express = require("express");
const app = express();
const userRoute = require("./routes/usersRoute");

const port = process.env.PORT || 3001;

app.use("/users/", userRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
