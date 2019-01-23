const db = require('../models')

db.song_data.findAll({ 
    where: {song_title: 'Lex'},
attributes: ['album_art', 'song_id', 'song_title', 'artist', 'album_name']
}).then((res) => {
    res.forEach(element => {
        console.log('-----------------')
        console.log(element)
        console.log('---------------')
    });
})
