//NOTE: This code is not being used. For reference only.

const express = require('express')
const router = express.Router()
const db = require('../models')

const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: false
}))

router.post("/add", addSongRoute)

function addSongRoute (req, res, next) {    
    console.log('Heres my query')
    console.log(req.body)
    let title = req.body.playlists
    let songId = getSongId(req.body.song)
    let playlistId = getPlaylistId(req.body.playlists)

    Promise.all([songId, playlistId])

    .then((results) => {
        console.log('heres the result')
        console.log(results)
        const song = results[0]
        const playlist = results[1]
        addSongToPlaylist(playlist.dataValues.id, song.dataValues.id)
    })
    
    .catch(err => {
        console.log
    })
    
    .then((result) => {
        res.redirect('/userPlaylist/' + `${req.body.playlists}`)
        res.end()
    })
}

function getSongId (songTitle) {
    return new Promise ((resolve, reject) => {
        db.song.findOne({
        where: {
            title: songTitle
        }
    })
    .then (res => {
        resolve(res)
    })
    .catch(er => {
        reject(er)
    })
})

};


function getPlaylistId (playlistTitle) {
    return new Promise ((resolve, reject) => {
        db.playlist.findOne({
        where: {
            title: playlistTitle
        }
    })
    .then (res => {
        resolve(res)
    })
    .catch(er => {
        reject(er)
    })
})

};

function addSongToPlaylist (playlistId, songId) {
    db.playlist_song.create({
        playlist_id: playlistId,
        song_id: songId,
        song_order: null
    })
    .then((res)=>{
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
};


module.exports = router

// function createPlaylistRoute (req, res, next) {

//     console.log(req.body.title)
//     var playlistTitle = req.body.title
//     const userId = req.session.user.id
//     createPlaylist(userId, playlistTitle)
//     //To Do: Add in catch function with error handling

//     .catch()
//     .then((result) => {
//       console.log('success')
//       console.log(result)
//       res.redirect('/userPlaylist?added=true')
//       res.end()
//     })
// }

// function createPlaylist (userid, title) {
//   // create playlist, then call linkUsertoPlaylist
//   return db.playlist.create({
//     title: title
//   })
//     .then(function linkUserToPlaylist (result) {
//       var playlistId = result.dataValues.id
//       var userId = userid
//       return db.user_playlist.create({
//         user_id: userId,
//         playlist_id: playlistId
//       })
//     })
// }

// module.exports = router
