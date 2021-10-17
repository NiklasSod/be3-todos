module.exports = {
    ensureAuthenticated: (req, res, next) => {
      if (req.isAuthenticated()) {
        return next();
      }
      const message = 'Please login to Todo.';
      res.render('login', { message });
    },
  };