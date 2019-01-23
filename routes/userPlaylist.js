const express = require('express')
const router = express.Router()
const db = require('../models/')

// db.playlist.findAll().then(function (res) {
//   console.log(res)
// })

router.get('/userPlaylist', (req, res) => {
  res.render('userPlaylist', {
    pageTitle: 'playlist',
    pageID: 'playlist',
    data: 'hello'
  })
})

router.get('/findPlayList', (req, res) => {
  db.playlist.findAll({
    where: {
      title: 'Demo Playlist 5'
    }
  }).then(results => {
    let pId = results[0].dataValues.id
    db.song.findAll({
      // where: {
      //   playlist_id: pId
      // },
      include: [{
        model: db.playlist,
        through: db.playlist_song,
        required: true

      }]
    }).then(results => {
      results.map((e) => {
        console.log(e.dataValues.title)
      })
    })
  })
  res.render()
})
module.exports = router
