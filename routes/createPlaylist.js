const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));

const getData = require('../sequlize/playlist');

router.use(function isLoggedin(req, res, next) {

    //Check to make sure that element id and innerhtml tags match the html/ejs files
    const usernameEl = document.getElementById("username")
    if (usernameEl.innerHTML !== 'Login') {
        var username = usernameEl.innerHTML
        next();
    } else {
        //Redirect to login page
        res.redirect('/login');
    }
}
);

router.use(function getUserId(req, res, next) {

})

// if (req.user) {
//     next();
// } else {
//     //Should redirect to login page
//     res.redirect('/login');
// }
//     router.get('/authenticate/user')
    
// function findUser (username) {
//     db.user.findOne( {
//         where: {
//             username: username
//         }
//     })
// };
//     function isAuthenticated(req, res, next) {
//     //checks here

//     //user logged in
//     if (req.user.authenticated)
//     return next();

//     //user not logged in
//     res.redirect('/error')


//First middleware = session ID
//Second middleware = auth ID

// FIXME: load this via a library or move this function to a util.js module
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

function isLoggedIn (req, res, nextFn) {
    req.session.
}

function createPlaylist (req, res, nextFn) {
    // create playlist, then call linkUsertoPlaylist
        db.playlist.create({
                title: req.body
        })
        .then(function (result) {
            console.log(result)
        })
        nextFn();
}

function returnPlaylistId (req, res, nextFn) {
    
    return req.id
}

function linkUserToPlaylist (req, res, nextFn) {
    // link user to playlist, then res.send('success!')
    db.user_playlist.create({
        user_id: req.session.user.id,
        playlist_id: 
    })
}

//redirect to playlist page

router.post('/api/playlist', (req, res) => {
    console.log('Someone called the playlist route')
    let input = 'Demo playlist'
    //'Demo playlist' will become req.body.'name of playlist input tag'
    console.log(input)
    const playlistId = 'playlist-' + uuid()
    getData.createPlaylist(input).then(function (resultFromDatabase) {
        // result.newId
    })
    
    .then((newPage)=>{
        res.redirect('/test/endpoint')
        res.redirect('/playlist?added=true')
        //newPage should be endpoint '/...' that will .get html page
    })
})

router.get('/test/endpoint', (req, res) => {
    console.log('success')
    res.end()
})

module.exports = router

//create playlist, then create new association in user_playlist join table with {find newly created playlist id, find userid, create new entry in join table}, then redirect to playlist page

// .then(() => {
//     db.playlist.findOne({
//         where: {
//             title: input
//         }
//     }); 
//  })
//  .then(() => {
//      db.user_playlist.create({
//          user_id: userId,
//          playlist_id: playlistId
//      })
//  })