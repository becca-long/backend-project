const express = require('express')
const router = express.Router()
const db = require('../models/')
const session = require('express-session')
const app = express()

// db.playlist.findAll().then(function (res) {
//   console.log(res)
// })

router.get('/dashboard', (req, res) => {
  console.log(req.session.user.username)
  res.render('index', {
    pageTitle: 'home',
    pageID: 'home',
    username: req.session.user.username
  })
})
module.exports = router
