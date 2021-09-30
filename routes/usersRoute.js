const express = require("express");
usersRoute = require("../controllers/usersController");

router = express.Router();

router.get("/", usersRoute.usersController);

module.exports = router;
