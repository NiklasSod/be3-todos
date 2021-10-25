const UserModel = require("../models/UsersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretToken = process.env.SECRET_TOKEN;
const salt = Number(process.env.SALT);

const generateToken = (user) => {
  return jwt.sign({ data: user }, secretToken, { expiresIn: "2h" });
};

const signupUser = async (req, res, next) => {
  const { name, password, email } = req.body;
  console.log(req.body.name)

  const user = await  UserModel.exists({ email });

  if (!user) {
    bcrypt.hash(password, salt, (error, hash) => {
      if (error) res.status(500);
      const newUser = new UserModel({
        name,
        password: hash,
        email,
      });
      newUser
        .save()
        .then((user) => {
          res.status(201).json({ token: generateToken(user._id) });
        })
        .catch((err) => {
          res.status(400).json({ msg: err.message });
        });
    });
  } else {
    res.status(400).json({ msg: "Email already in use" });
  }
};

const signInUser = (req, res, next) => {
  const { email, password } = req.body;

  UserModel.findOne({ email }).exec((err, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, match) => {
        if (error) res.status(500).json({ msg: error });
        else if (match)
          res.status(200).json({ token: generateToken(user._id) });
        else res.status(403).json({ msg: "wrong email or password" });
      });
    } else {
      res.status(403).json({ msg: "wrong email or password" });
    }
  });
};

const getUser = async (req, res, next) => {
  const id = req.user;
  try {
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


module.exports = { signupUser, signInUser, getUser };
