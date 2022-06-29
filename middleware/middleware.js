import { Profile } from "../models/profile.js"

function passUserToView(req, res, next) {
  res.locals.user = req.user ? req.user : null
  next()
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}

function isAdmin(req, res, next) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    if(profile.isAdmin) {
      return next()
    }else {
      res.redirect('/auth/google')
    }
  })
}

export {
  passUserToView,
  isLoggedIn,
  isAdmin
}
