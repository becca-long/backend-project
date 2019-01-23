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
  console.log(req.session)
  const userId = req.session.user.id

  getData.getUserPlaylists(userId, res)
  // res.render('index', {
  //   pageTitle: 'home',
  //   pageID: 'home',
  //   data: 'hello'
  // })
})
module.exports = router
