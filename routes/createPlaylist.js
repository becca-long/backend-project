const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));

const getData = require('../sequlize/playlist');

router.post('/api/playlist', (req, res) => {
    console.log('Someone called the playlist route')
    let input = 'Demo playlist'
    //'Demo playlist' will become req.body.'name of playlist input tag'
    console.log(input)
    getData.createPlaylist(input)
    .then((newPage)=>{
        res.redirect('/test/endpoint')
        //newPage should be endpoint '/...' that will .get html page
    })
})

router.get('/test/endpoint', (req, res) => {
    console.log('success')
    res.end()
})

module.exports = router