
const searchFunctions = {
    getSong: getSong,
    getAlbum: getAlbum

}
module.exports= searchFunctions


const db = require('../models')




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

        db.albums.findAll({

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


