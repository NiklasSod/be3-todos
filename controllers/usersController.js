const User = require("./../models/users");

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

  newUser.save();
  return res.status(200).json({ msg: newUser });
};

// app.get('/createuser', function(req, res){

//   var user = new User();

//   user.name = req.body.name;
//   user.city = req.body.city;

//   if(req.body.type == "typeA"){
//       user.accounts.typeA.isUser = true;
//   }
//   if(type == "typeB"){
//       user.accounts.typeB.isUser = true;
//   }

//   user.save(function(err, user){
//       if(err) return err;
//       res.send(user);
//   });
// });
