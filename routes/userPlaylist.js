const express = require('express')
const router = express.Router()
const db = require('../models/')

// db.playlist.findAll().then(function (res) {
//   console.log(res)
// })
const playlist = require('../sequlize/playlist')

router.get('/userPlaylist', (req, res) => {
  res.render('userPlaylist', {
    pageTitle: 'playlist',
    pageID: 'playlist',
    data: 'hello'
  })
})

router.get('/findPlayList', (req, res) => {
  let id = req.session.user.id
  console.log('A user is calling their playlist')
  let info = req.query.playlist
  let songTitle = req.query.getSong(info)
  let artistName = req.playlist.getArtist(info)
  let albumName = req.playlist.getAlbum(info)
  
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
// const search = require('../sequlize/userSearch')

// module.exports = router

// router.get('/search', (req, res) => {
//   console.log('Someone called the /serch')
//   let itm = req.query.search
//   let songs = search.getSong(itm)
//   let albums = search.getAlbum(itm)
//   let artist = search.getArtist(itm)
//   Promise.all([songs, albums, artist])
//     .then((results) => {
//       let data = []
//       results.forEach((elm) => {
//         if (elm.length > 0) {
//           elm.forEach((itm) => {
//             data.push(itm)
//           })
//         }
//       })
//       console.log(data)
//       // res.json(data)
//       res.render('userSearch', { pageTitle: 'Register',
//         pageiD: 'REGISTER',
//         data: data,
//         username: req.session.user.username })
//     })
// })


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

