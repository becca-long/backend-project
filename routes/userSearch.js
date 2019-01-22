const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const getData = require("../sequlize/sequlize");

module.exports = router;

router.get("/search", (req, res) => {
  console.log("Someone called the /serch");
  let search = req.query.search;
  let songs = getData.getSong(search);
  let albums = getData.getAlbum(search);
  let artist = getData.getArtist(search);
  Promise.all([songs, albums, artist])
  .then((res)=>{
    console.log("This should be all the results from search", res);
  })
});
