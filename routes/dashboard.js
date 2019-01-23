const express = require('express')
const router = express.Router()
const db = require('../models/')
const session = require('express-session')
const app = express()
const getData = require('../sequlize/playlist')

// db.playlist.findAll().then(function (res) {
//   console.log(res)
// })

router.get('/dashboard', (req, res) => {
<<<<<<< HEAD
  console.log(req.session)
  const userId = req.session.user.id

  getData.getUserPlaylists(userId, res)
  // res.render('index', {
  //   pageTitle: 'home',
  //   pageID: 'home',
  //   data: 'hello'
  // })
=======
  console.log(req.session.user.username)
  res.render('index', {
    pageTitle: 'home',
    pageID: 'home',
    username: req.session.user.username
  })
>>>>>>> 03251af24b03c669e7cc0a98ec5c807d5c236c8a
})
module.exports = router
