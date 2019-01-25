const express = require('express')
const router = express.Router()
const db = require('../models/')

// db.playlist.findAll().then(function (res) {
//   console.log(res)
// })
const playlist = require('../sequlize/playlist')

router.get('/userPlaylist', (req, res) => {
  let data = []
  res.render('userPlaylist', {
    pageTitle: 'playlist',
    pageID: 'playlist',
    data2: data
  })
})

router.get('/userPlaylist/:title', (req, res) => {
  let playlistTitle = req.params.title

 db.playlist_data.findAll({
   where: {
     playlist_title: playlistTitle
   },
   attributes: ['user_id', 'playlist_title', 'song_order', 'song_title', 'artist', 'album_name']
}).then((result) => {
  console.log(result)
  let data = []
  res.render('userPlaylist', {
    pageTitle: 'playlist',
    pageID: 'playlist',
    data2: result,

  })
})

  
})

router.get('/findPlayList', (req, res) => {
  let id = req.session.user.id
  console.log('A user is calling their playlist')
  let info = req.query.playlist
  let songTitle = req.query.getSong(info)
  let artistName = req.playlist.getArtist(info)
  let albumName = req.playlist.getAlbum(info)

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
    .then((results) => {
      let data2 = []
      results.forEach((e) => {
        if (e.length > 0) {
          e.forEach((info) => {
            data2.push(info)
          })
        }
      })
      console.log(data2)
      // res.json(data2)
      res.render('userPlaylist', { pageTitle: 'Playlist',
        pageId: 'Playlist',
        data: data2,
        username: req.session.user.username })
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
