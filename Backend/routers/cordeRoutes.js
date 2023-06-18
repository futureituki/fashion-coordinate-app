const express = require('express')
const app = express()
const cordeModel = require('../models/Corde')

app.get('/corde/new', async(req, res) => {
  const corde = await cordeModel.find()
  res.status(200).json(corde)
})
app.get('/corde/popular', async(req, res) => {
  const corde = await cordeModel.find()
  res.status(200).json(corde)
})
app.get('/corde/:id', async(req, res) => {
  const corde = await cordeModel.findById(req.params.id)
  res.status(200).json(corde)
})