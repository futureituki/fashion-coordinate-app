const express = require('express')
const app = express()
const userModel = require('../models/user')

app.get('/user', async(req, res) => {
  const user = await userModel.findOne({id:req.session.user.id})
  console.log(user)
  try {
    res.json(user)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/users/:id', async(req, res) => {
  const user = await userModel.findOne({id:req.params.id})
  try {
    res.json(user)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app