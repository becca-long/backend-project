
const createFunctions = {
    createPlaylist: createPlaylist
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
                (resolve(results))
            })
            .catch((er)=>{reject(er)})
    })
};

