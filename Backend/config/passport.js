const GoogleStrategy = require('passport-google-oauth20').Strategy;
const UserModel = require('../models/user')
const passport = require('passport')
const random = require('../src/lib/random')  
require('dotenv').config();
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
module.exports = function(passport) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_AUTH_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  async(accessToken, refreshToken, profile, cb) => {
    console.log(profile)
    const newUser = {
      id: profile.id,
      uid: random(),
      name: profile.displayName,
      email: profile.emails[0].value,
      image: profile.photos[0].value,
      cordes: []
    }

    try {
      let user = await UserModel.findOne({ id: profile.id })

      if (user) return cb(null, user)
      user = await UserModel.create(newUser)
      return cb(null, user)
    } catch (err) {
      console.error(err)
    }
  }))}