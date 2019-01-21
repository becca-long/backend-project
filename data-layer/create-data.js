const db = require('../models')

const createDataFunctions = {
    createPlaylist: createPlaylist,
    linkPlaylistToUser: linkPlaylistToUser,
    linkSongToPlaylist: linkSongToPlaylist
}

module.exports = createDataFunctions

function createPlaylist (title) {
    return db.playlist.create({
            title: title
    })
}

function linkPlaylistToUser (userId, playlistId) {
    return db.user_playlist.create({
        user_id: userId,
        playlist_id: playlistId
    })
}

function linkSongToPlaylist (playlistId, songId, songOrder) {
    return db.playlist_song.create({
        playlist_id: playlistId,
        song_id: songId,
        song_order: songOrder
    })
}
