const UserModel = require("../models/UsersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretToken = process.env.SECRET_TOKEN;
const salt = Number(process.env.SALT);

const generateToken = (user) => {
  return jwt.sign({ data: user }, secretToken, { expiresIn: "2"});
};

const registerUser = async (req, res) => {
  const { name, email, password} = req.body;

  const user = await UserModel.exist({ email });

  if (!user) {
    bcrypt.hash(password, salt, (error, hash) => {
      if(error) res.status(500);
      const newUser = new UserModel({
        name,
        email,
        password: hash,
      });
      newUser
        .save()
        .then((user) => {
          res.status(201).json({token: generateToken(user._id) });
        })
        .catch((err) => {
          res.status(400).json({ msg: err.message});
        });
    });
  } else {
    res.status(400).json({ msg: "Email already in use" });
  }
};

  const loginUser = (req, res) => {
    const { email, password } = req.body;

    UserModel.findOne({ email }).exec((err, user) => {
      if (user){
    bcrypt.compare(password, user.password, (error, match) => {
      if (error) res.status(500).json({ msg: error });
      else if (match) res.status(200).json({ token: generateToken(user._id)});
      else res.status(403).json({ msg: "Wrong email or password" });
    });
  } else {
    res.status(403).json({ msg: "Wrong email or password" });
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

// const updateUser = (req, res) => {
//   const id = req.user;
//   const{ name, email, password } = req.body;
//   try {
//     UserModel.findOneAndUpdate(
//       id,
//       { name, email },
//       { returnOriginal: false }
//     )
//       .then((user) => {
//         user.password = null;
//         res.status(200).json({ user });
//       })
//         .catch((err) => res.status(500).json({ msg: err.message}));
//   }catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

module.exports = { registerUser, loginUser, getUser, updateUser };
