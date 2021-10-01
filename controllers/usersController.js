exports.showRegisterPage = (req, res) => {
  res.json({ message: "Hello from registerpage!" });
};

exports.registerUser = (req, res) => {};

// router.post('/register', (req, res) => {
//   const {name, password} = req.body
//   const errors = []
//   if (name.length < 3 || name.length > 12) {
//       errors.push({msg: 'Name length must be between three and twelve characters long.'})
//   } if (password.length < 6) {
//       errors.push({msg: 'Password must be at least six characters long.'})
//   } if(errors.length > 0) {
//       res.render('register', {errors})
//   } else {
//       const newUser = new User({
//           name, password
//       })

//       bcrypt.hash(password, 10, (err, hash) => {
//           newUser.password = hash
//           newUser
//               .save()
//               .then(value => {
//                   req.flash('success_msg', 'You are registered to Slacky!')
//                   res.redirect('/')
//               })
//               .catch(err => {
//                   req.flash('error_msg', 'Username already exists!')
//                   res.redirect('/register')
//               })
//       })
//   }
// })
