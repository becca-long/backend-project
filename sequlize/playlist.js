
const createFunctions = {
    createPlaylist: createPlaylist,
    associatePlaylist: associatePlaylist,
    addSong: addSong
};

module.exports= createFunctions;

const db = require('../models')

function createPlaylist (input) {
    return new Promise((resolve, reject) => {
        console.log(input)
        db.playlist.create({
                title: input
            })
            .then((results) => {
                console.log(results)
                resolve(results)
            })
            .catch((er)=>{reject(er)})
    })
};

function associatePlaylist () {
    return new PromiseRejectionEvent((resolve, reject) => {
        db.user_playlist.create({
            user_id: ,
            playlist_id: 
        })
    })
}

function addSong (input) {
    return new Promise((resolve, reject) => {
        console.log(input)
        db.playlist_song.create({
            playlist_id: ,
            song_id: ,
            song_order: 
        })
    })
}