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
  let id = req.session.user.id
  db.playlist_data.findAll({
    where: {
      user_id: id },
    attributes: ['user_id', 'playlist_title', 'song_order', 'song_title', 'artist', 'album_name']
  }).then(result => {
    res.render('userPlaylist', {
      pageTitle: 'playlist',
      pageID: 'playlist',
      data: result,
      playlistName: result.playlist_title
    })
  })
})

// router.get('/findPlayList', (req, res) => {
//   db.playlist.findAll({
//     where: {
//       title: 'Demo Playlist 5'
//     }
//   }).then(results => {
//     let pId = results[0].dataValues.id
//     db.song.findAll({
//       // where: {
//       //   playlist_id: pId
//       // },
//       include: [{
//         model: db.playlist,
//         through: db.playlist_song,
//         required: true

//       }]
//     }).then(results => {
//       results.map((e) => {
//         console.log(e.dataValues.title)
//       })
//     })
//   })
//   res.render()
// })
module.exports = router

// const db = require('../models')

// db.song_data.findAll({
//     where: {song_title: 'Lex'},
//     attributes: ['album_art', 'song_id', 'song_title', 'artist', 'album_name']
// }).then((res) => {
//     res.forEach(element => {
//         console.log('-----------------')
//         console.log(element)
//         console.log('---------------')
//     });
// })
