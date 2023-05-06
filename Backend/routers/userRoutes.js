const express = require('express')
const app = express()
const passport = require('passport')
const userModel = require('../models/user')
app.get('/user', async(req, res) => {
  const user = await userModel.findOne({id:req.session.user.id})
  try {
    res.json(user)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app