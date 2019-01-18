const express = require('express')
const router = express.Router()
const db = require('../models/')

db.playlist.findAll().then(function (res) {
  console.log(res)
})

// router.get('/dashboard', (req, res) => {

// })
module.exports = router
