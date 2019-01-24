const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const search = require("../sequlize/userSearch");
const getData = require('../sequlize/playlist')

module.exports = router;

router.get("/search", (req, res) => {
  console.log("Someone called the /serch")

  let itm = req.query.search;
  let songs = search.getSong(itm)
  let albums = search.getAlbum(itm)
  let artist = search.getArtist(itm)
  Promise.all([songs, albums, artist])
  .then((results) =>{
    let data = []
    results.forEach((elm)=>{
      if(elm.length > 0){
        elm.forEach((itm)=>{
          data.push(itm)
        })
      }
    })
    const userId = req.session.user.id
    getData.getUserPlaylists(userId, res)
    // res.json(data)
    res.render('userSearch', {pageTitle: "Register",
    pageiD: "REGISTER", data: data})
  })
});



