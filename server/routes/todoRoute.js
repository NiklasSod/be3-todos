const express = require("express");
usersRoute = require("../controllers/todoController");
// const { verify } = require("../config/auth");

router = express.Router();

router.get("/", usersRoute.todoPage);
router.get("/:id", usersRoute.todoDetailPage);
router.post("/", usersRoute.addNewTodo);
router.delete("/:id", usersRoute.deleteTodo);
router.post("/:id", usersRoute.updateTodo);

module.exports = router;
