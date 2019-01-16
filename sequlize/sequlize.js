



const db = require('../models')


const searchFunctions = {
    getSong: getSong,
    getAlbum: getAlbum

}
module.exports= searchFunctions



function getSong(term) {
    return new Promise((resolve, reject) => {
        console.log(term)
        db.song.findAll({
                where: {
                    title: term
                }
            })
            .then((res) => {
                console.log(res)
                (resolve(res))

            })
            .catch((er)=>{reject(er)})
    })

}


function getAlbum(term){
    return new Promise((resolve, reject)=>{
        db.songAlbums.findAll({
            where:{
                title:term
            }
        })
        .then((elm)=>{
            resolve(elm)
        })
        .catch((er)=>{reject(er)})
    })
}