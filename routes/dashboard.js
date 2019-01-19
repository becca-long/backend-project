const express = require('express')
const router = express.Router()
const db = require('../models/')

// db.playlist.findAll().then(function (res) {
//   console.log(res)
// })

router.get('/dashboard', (req, res) => {
  console.log(req.session)
  res.render('index', {
    pageTitle: 'home',
    pageID: 'home',
    data: 'hello'
  })
})
module.exports = router
