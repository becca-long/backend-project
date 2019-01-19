const express = require('express')
const router = express.Router()
const db = require('../models/')

// db.playlist.findAll().then(function (res) {
//   console.log(res)
// })

router.get('/userPlaylist', (req, res) => {
  res.render('index', {
    pageTitle: 'playlist',
    pageID: 'playlist',
    data: 'hello'
  })
})
module.exports = router
