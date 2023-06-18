const express = require('express')
const app = express()
const likeModels = require('../models/Corde')

app.post('/codes/like', async(req, res) => {
  const body = req.body
  const { uid, code_id } = body
  const likeCode = await likeModels.create({ uid, code_id })
  if(likeCode) {
    res.status(200)
  } else {
    res.status(500)
  }
})
app.get('/codes/popular', async(req, res) => {
  const codes = await codeModel.find()
  res.status(200).json(codes)
})