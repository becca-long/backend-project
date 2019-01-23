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

module.exports = router;

router.get("/search", (req, res) => {
  console.log("Someone called the /serch")
  let itm = req.query.search;
  let songs = search.getSong(itm)
  let albums = search.getAlbum(itm)
  let artist = search.getArtist(itm)
  Promise.all([songs, albums, artist])
  .then((results) =>{
    console.log("This should be all the results from search", results);
  })
});

