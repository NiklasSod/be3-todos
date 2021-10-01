const express = require("express");
usersRoute = require("../controllers/usersController");

router = express.Router();

// router.get("/", usersRoute.showLoginPage);
// router.post("/", usersRoute.loginUser);
router.get("/register/", usersRoute.showRegisterPage);
router.post("/register/", usersRoute.registerUser);

module.exports = router;
