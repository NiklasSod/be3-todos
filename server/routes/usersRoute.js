const express = require("express");
router = express.Router();
// usersRoute = require("../controllers/usersController");
const { verify } = require("../config/auth");
const {
    registerUser,
    loginUser,
    getUser,
    updateUser,
  } = require("../controllers/UsersController");

// router.get("/", usersRoute.showLoginPage);
// router.post("/login", usersRoute.loginUser);

// router.get("/register/", usersRoute.showRegisterPage);
// router.post("/register/", usersRoute.registerUser);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", verify, getUser);
router.post("/", verify, updateUser);

module.exports = router;
