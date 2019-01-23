const express = require('express')
const router = express.Router()
const db = require('../models')

const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: false
}))

router.post('/api/playlist', createPlaylistRoute)  /* change this */


router.get('playlist_disp_leftbar', funciton(req, res) {
    let id = req.session.user.id
    db.playlist_data.findAll({ 
        where: {user_id: id },
        attributes: ['playlist_title']
    }).then((res) => {
        res.forEach(element => {
            console.log('-----------------')
            console.log(element)
            console.log('---------------')
        });
    })
})




module.exports = router

