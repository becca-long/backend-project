const express = require('express');
const router = express.Router();
const db = require('../models')

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/api/playlist', createPlaylistRoute)

function createPlaylistRoute (req, res, next) {
    //To Do: Update 'req.body' to match form input on front end
    createPlaylist(1, req.body)

    .catch((error) => {
        return 'Unable to create playlist'
    })

    .then((result) => {
        console.log(result)
        console.log('success')
        //TO DO: redirect to appropriate page (userplaylist? dashboard?)
        // res.redirect('/userPlaylist?added=true')
    })
}

function createPlaylist (userid, title) {
        return db.playlist.create({
                title: title
        })

        .catch((error) => {
            console.log('Error creating playlist')
        })

        .then(function linkPlaylistToUser (result) {
            var playlistId = result.dataValues.id
            var userId = userid
            return db.user_playlist.create({
                user_id: userId,
                playlist_id: playlistId
            })

            .catch((error) => {
                console.log('Error associating playlist with user')
            })
        })
};

module.exports = router