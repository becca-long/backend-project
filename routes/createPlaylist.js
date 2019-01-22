const express = require("express");
const router = express.Router();
const db = require("../models");

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

router.post("/api/playlist", createPlaylistRoute);

function createPlaylistRoute(req, res, next) {
  var playlistTitle = req.body.title;

  console.log("THis is the user", req.session);
  if (!req.session.user) {
    console.log("hi");
  } else {
    let user = req.session.user.id;
    createPlaylist(playlistTitle)
      .then(itm => {
        return itm.user.id;
      })
      .then(id => {
        linkUserToPlaylist(id, user).then(
          res.redirect("/userPlaylist?added=true")
        )
      })
      .catch(er => {
        console.log("This is the error", er);
      });
  }
}

function createPlaylist(title) {
  // create playlist, then call linkUsertoPlaylist
  return new Promise((resolve, reject) => {
    db.playlist
      .findOrCreate({ where: { title: title }, defaults: { title: title } })
      .spread((user, created) => {
        let results = {
          user: user,
          created: created
        };
        resolve(results);
      })
      .catch(er => {
        reject(er);
      });
  });
}
function linkUserToPlaylist(playlistId, userId) {
  console.log("THis is in linkUserToplaylist", playlistId, userId);
  return new Promise((resolve, reject) => {
    db.user_playlist
      .findOrCreate({
        where: { playlist_id: playlistId },
        defaults: { user_id: userId, playlist_id: playlistId }
      })
      .spread((user, created) => {
        resolve(created);
      })
      .catch(er => {
        reject(er);
      });
  });
}

module.exports = router;
