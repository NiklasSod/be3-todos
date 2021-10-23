const express = require("express");
router = express.Router();
const { verify } = require("../config/auth");
const {
    signupUser,
    signInUser,
    getUser,
  } = require("../controllers/UsersController");

router.post("/signup", signupUser);
router.post("/signin", signInUser);
router.get("/", verify, getUser);

module.exports = router;
