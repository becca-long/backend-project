const express = require('express');
const router = express.Router();
const axios = require('axios')
const db = require('../models');

router.get('/user_playlist/:userid', (req, res, next) => {
    console.log(req.params.userid)
})



//**************************************************************//

router.get('/api/user-playlists', getPlaylistsRoute)

function getPlaylistsRoute (req, res, next) {
    //To Do: add back getPlaylists(req.session.user.id)
    getPlaylists (1)
    .catch((error) => {
        console.log('Unable to find users playlists')
    })
    .then((result) => {
        console.log(result)
        var playlistIdArray = []
        result.forEach((arrayItem) => {
            var playlistId = arrayItem.dataValues.playlist_id
            playlistIdArray.push(playlistId)
        })
        console.log(playlistIdArray)
        return playlistIdArray
    })
    .catch((error) => {
        console.log('Cannot create playlist Id array')
    })
    .then((results) => {
        console.log(results)
        var playlistTitles = []
        results.forEach((arrayItem) => {
            var playlistTitle = db.playlist.findOne({
                where: {
                    id: arrayItem
                },
                attributes: ['title']
            })
            playlistTitles.push(playlistTitle)
            })
        console.log(playlistTitles)
    }) 
}

function getPlaylists (userId) {
    return db.user_playlist.findAll({
        where: {
            user_id: userId
        }
    //Returns an array of all user_playlist instances that have the userid
    })
}

// function 

module.exports = router