const express = require('express')
const router = express.Router()
const db = require('../models/')

db.playlist.findAll().then(res, function {
    console.log(res)
})

module.exports = router
