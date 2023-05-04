const express = require('express')
const app = express()
const userModel = require('../models/user')

app.use(express.json())
app.get('/user', async(req, res) => {
  const user = await userModel.find({})

  try {
    res.send(user)
  } catch (err) {
    res.status(500).send(err)
  }
})
app.post('/user/create', async(req, res) => {
  const user = userModel(req.body)
  try {
    await user.save()
    res.status(200).send('OK')
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app