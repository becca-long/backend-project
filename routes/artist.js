const express = require('express')
const router = express.Router()
const db = require('../models')

db.artist.findAll().then(function (res){
    // console.log(res)
})

module.exports = router
