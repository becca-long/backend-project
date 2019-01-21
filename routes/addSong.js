const express = require('express')
const router = express.Router()
// const data = require('../data-layer/create-data')
const db = require('../models')

const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.unsubscribe(bodyParser.urlencoded({
    extended: true
}))

router.get('/get/userplaylists', userPlaylistRoute)

function userPlaylistRoute (req, res, next) {
    findUserPlaylists(1)
}

function findUserPlaylists (userId) {
    return db.user_playlist.findAll({
        attributes: ['playlist_id'],
        where: {
            user_id: userId
        }
    })
    .then((results) => {
        console.log(results)
        console.log(results.playlist_id)
    })
}

module.exports = router
// router.post('/addsong', function addSongRoute (req, res, next) {

// })

// //playlistId = req.body.id (selected from dropdown and is what initiates the post request)
// //songId = 

// function linkSongToPlaylist (playlistId, songId, songOrder) {
//     return db.playlist_song.create({
//         playlist_id: playlistId,
//         song_id: songId,
//         song_order: songOrder
//     })
// }
