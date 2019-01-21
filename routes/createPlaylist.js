const express = require('express');
const router = express.Router();
const db = require('../models')

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));

router.post('/api/playlist', createPlaylistRoute)

function createPlaylistRoute (req, res, next) {
    //To Do: Update 'req.body' to match form input on front end
    //To Do: replace user id with: req.session.user.id
    createPlaylist(1, 'Testing a Playlist 2')
    //To Do: Add in catch function with error handling
    .catch()
    .then((result) => {
        console.log('success')
        console.log(result)
        res.redirect('/dashboard?added=true')
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