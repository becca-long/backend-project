const express = require('express')
const router = express.Router()
const db = require('../models')

const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: false
}))

router.post('/api/playlist', createPlaylistRoute)

function createPlaylistRoute (req, res, next) {
    console.log(req.body.title)
    var playlistTitle = req.body.title
    //To Do: replace userId with correct identifier that will pull in logged in user's id ('req.session.user.id' ?)
    createPlaylist(userId, playlistTitle)
    //To Do: Add in catch function with error handling
    .catch()
    .then((result) => {
        console.log('success')
        console.log(result)
        res.redirect('/userPlaylist?added=true')
        res.end()
    })
}

function createPlaylist (userid, title) {
  // create playlist, then call linkUsertoPlaylist
  return db.playlist.create({
    title: title
  })
    .then(function linkUserToPlaylist (result) {
      var playlistId = result.dataValues.id
      var userId = userid
      return db.user_playlist.create({
        user_id: userId,
        playlist_id: playlistId
      })
    })
}

module.exports = router
