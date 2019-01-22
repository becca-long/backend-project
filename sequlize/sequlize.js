const searchFunctions = {
  getSong: getSong,
  getAlbum: getAlbum,
  getArtist: getArtist,
  getAll: getAll
};
module.exports = searchFunctions;

const db = require("../models");

function getSong(term) {
  return new Promise((resolve, reject) => {
    console.log(term);
    console.log('GetSong')
    db.song
      .findAll({
        where: {
          title: term
        }
      })
      .then(res => {
        console.log(res)(resolve(res));
      })
      .catch(er => {
        reject(er);
      });
  });
}

function getAlbum(term) {
  return new Promise((resolve, reject) => {
    console.log('getAlbum')
    db.album
      .findAll({
        where: {
          title: term
        }
      })
      .then(elm => {
        resolve(elm);
      })
      .catch(er => {
        reject(er);
      });
  });
}

function getArtist(term) {
  return new Promise((resolve, reject) => {
    console.log('getArtist')
    db.artist
      .findAll({
        where: {
          name: term
        }
      })
      .then(itm => {
        resolve(itm);
      })
      .catch(er => {
        reject(er);
      });
  });
}

function getAll(term) {
  let songs = new Promise((resolve, reject) => {
    console.log(term);
    db.song
      .findAll({
        where: {
          title: term
        }
      })
      .then(res => {
        console.log(res)(resolve(res));
      })
      .catch(er => {
        reject(er);
      });
  });
  let albums = new Promise((resolve, reject) => {
    db.album
      .findAll({
        where: {
          title: term
        }
      })
      .then(elm => {
        resolve(elm);
      })
      .catch(er => {
        reject(er);
      });
  });

  let artist = new Promise((resolve, reject) => {
    db.artist
      .finaAll({
        where: {
          name: term
        }
      })
      .then(itm => {
        resolve(itm);
      })
      .catch(er => {
        reject(er);
      });
  });
  return new Promise((resolve, reject) => {
    Promise.all([songs, albums, artist])
      .then(res => {
        resolve(res);
      })
      .catch(er => {
        reject(er);
      });
  });
}
