const queryFunctions = {
    getUserPlaylists: getUserPlaylists,
    // addSong: addSong
};

module.exports= queryFunctions;

const db = require('../models')

function getUserPlaylists (userId) {

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
            
          
        })
    }
        

        

    //         .then((result) => {
    //         //     console.log('~~~~~~~~~~~~')
    //         //     console.log(result)
    //         //     console.log('~~~~~~~~~~~~~~~')
    //             // res.render('userSearch', {
    //             //             pageTitle: 'Register',
    //             //             pageId: 'REGISTER',
    //             //             title: result
    //             //         })
    //         })
    // })


// getUserPlaylists(1)

// <% forEach((blah) => { %>
//     blah blah html
// <% }) %>


// getUserPlaylists(1)

// db.playlist_data.findAll({
//     where: {user_id: 1},
//     attributes: ['playlist_title']
// }).then((res) => {
//     res.forEach(element => {
//         console.log('-----------------')
//         console.log(element)
//         console.log('---------------')
//     })
// })

//**************************************************** */
// function addSong (playlistId, songId, songOrder) {
//     return new Promise((resolve, reject) => {
//         console.log(input)
//         db.playlist_song.create({
//             playlist_id: playlistId,
//             song_id: songId,
//             song_order: songOrder
//         })
//     })
// }j