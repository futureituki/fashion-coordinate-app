const express = require('express')
const passport = require('passport')
const app = express()

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email','profile'] }))

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session:true }),
  function(req, res) {
    req.session.user = req.user
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3002');
  });


module.exports = app