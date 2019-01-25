const express = require('express')
const router = express.Router()
const db = require('../models/')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/getPlaylist', (req, res) => {
  let userId = req.session.user.id
  let titlesArray = []
  function getUserPlaylists (userId) {
    db.user_playlist.findAll({
      where: { user_id: userId },
      attributes: ['playlist_id']
    })
      .then((result) => {
        db.playlist.findAll({
          where: { id: result.map(el => {
            return el.dataValues.playlist_id
          })
          },
          attributes: ['title']
        }).then((finalArray) => {
          finalArray.forEach((elm) => {
            titlesArray.push(elm)
          })
          console.log('HELLO')
          console.log(titlesArray)
          res.render('sidebar', {
            pageTitle: 'playlist',
            pageID: 'playlist',
            data: 'hello',
            title: titlesArray
          })
        })
      })
  }
})

module.exports = router
