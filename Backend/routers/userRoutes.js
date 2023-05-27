const express = require('express')
const app = express()
const userModel = require('../models/user')

app.get('/user', async(req, res) => {
  if(req.session.user) {
    const user = await userModel.findOne({id:req.session.user.id})
    try {
      res.json(user)
    } catch (err) {
      res.status(500).send(err)
    }
  } else {
    res.status(404).send('Not Found')
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

app.put('/users/setting', async(req, res) => {
  try {
    await userModel.updateMany({id:req.session.user.id}, req.body)
    res.status(200).send('ok')
  } catch(e) {
    res.send(e)
  }
})
module.exports = app