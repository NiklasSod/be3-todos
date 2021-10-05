const User = require("./../models/users");
const bcrypt = require('bcrypt');

exports.showRegisterPage = (req, res) => {
  res.json({ message: "Hello from registerpage!" });
};

exports.registerUser = (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;


  
  
  const newUser = new User({
    name,
    email,
    password,
  });

  bcrypt.genSalt(10, (err, salt) => {
    if (err) console.log(err);
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      //Save pass to hash
      newUser.password = hash;
      //Save user
      newUser
        .save()
        .then((value) => {
          console.log('The following user was created:');
          console.log(value);
          const message = 'You have successfuly registered!';
          res.render('login', { message });
        })
        .catch((value) => console.log(value));
    });
  });
};

