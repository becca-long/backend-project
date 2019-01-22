//Note: This function is incomplete and may not be needed
//To Do: Complete function to be used as part of the 'Add Song to Playlist' route 
const createFunctions = {
    addSong: addSong
};

module.exports= createFunctions;

const db = require('../models')

function addSong (playlistId, songId, songOrder) {
    return new Promise((resolve, reject) => {
        console.log(input)
        db.playlist_song.create({
            playlist_id: playlistId,
            song_id: songId,
            song_order: songOrder
        })
    })
}