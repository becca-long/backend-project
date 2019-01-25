const express = require('express')
const router = express.Router()
const db = require('../models')
const getData = require('../sequlize/playlist')

const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: false
}))

router.get('/user/playlist', getUserPlaylistRoute)

function getUserPlaylistRoute (req, res, next) {
    const userId = req.session.user.id

    getData.getUserPlaylists(userId, res)
    
}

module.exports = router