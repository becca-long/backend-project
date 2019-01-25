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
const db = require('../models')

module.exports = router;

router.get("/search", (req, res) => {
  console.log("Someone called the /search")
  let data = []
  let titles = []
  let userId = req.session.user.id

  let itm = req.query.search;
  let songs = search.getSong(itm)
  let albums = search.getAlbum(itm)
  let artist = search.getArtist(itm)

  Promise.all([songs, albums, artist])

  .then((results) =>{

    results.forEach((elm)=>{
      if(elm.length > 0){
        elm.forEach((itm)=>{
          data.push(itm)

        })
      }
    })

      db.user_playlist.findAll({
        where: {user_id: userId},
        attributes: ['playlist_id']
    })
    .then((result) => {
            db.playlist.findAll({
                where: {id: result.map(el => {
                    return el.dataValues.playlist_id
                })
            },
                attributes: ['title']
            })
            .then((titleRes) => {
               titleRes.forEach((el) => {
                   titles.push(el)
               })
               res.render('userSearch', {
                pageTitle: "Register",
                pageiD: "REGISTER",
                data: data,
                title: titles
              })   
        })
        })

    })

});

