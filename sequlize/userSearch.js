const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const db = require("../models");

const search = {
  getSong: getSong,
  getAlbum: getAlbum,
  getArtist: getArtist
};
module.exports = search;


function getSong(term) {
  return new Promise((resolve, reject) => {
    db.song_data
      .findAll({
        where: { song_title: { [Op.iLike]: "%" + term } },
        attributes: [
          "album_art",
          "song_id",
          "song_title",
          "artist",
          "album_name"
        ]
      })
      .then(res => {
        var res_song = res
        resolve(res_song);
      })
      .catch(er => {
        reject(er);
      });
  });
}

function getAlbum(term) {
  return new Promise((resolve, reject) => {
    db.song_data
      .findAll({
        where: {
          album_name: {[Op.iLike]: "%" + term}},
          attributes: [
            "album_art",
            "song_id",
            "song_title",
            "artist",
            "album_name"
          ]
      })
      .then(res => {
        var res_album = res
        resolve(res_album);
      })
      .catch(er => {
        reject(er);
      });
  });
}
function getArtist(term) {
  return new Promise((resolve, reject) => {
    db.song_data
      .findAll({
        where: {
          artist: {
            [Op.iLike]: "%" + term
          }
        },
        attributes: [
          "album_art",
          "song_id",
          "song_title",
          "artist",
          "album_name"
        ]
      })
      .then(res => {
        var res_artist = res
        resolve(res_artist);
      })
      .catch(er => {
        reject(er);
      });
  });
}




// getSong('lex')
// .then((res)=>{
//     console.log(res)
// })
