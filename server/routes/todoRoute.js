const express = require("express");
usersRoute = require("../controllers/todoController");

router = express.Router();

router.get("/", usersRoute.todoPage);

module.exports = router;
