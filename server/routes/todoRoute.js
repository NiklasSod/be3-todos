const express = require("express");
usersRoute = require("../controllers/todoController");
// const { verify } = require("../config/auth");

router = express.Router();

router.get("/", usersRoute.todoPage);
router.post("/", usersRoute.addNewTodo);

module.exports = router;
