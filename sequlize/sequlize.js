



const Sequelize = require('sequelize')
const sequelize = require('../sequlizeSetup')





const searchFunctions = {
    getSong: getSong,
    getAlbum: getAlbum

}
module.exports= searchFunctions

const Song = sequelize.define('song', {
    title: Sequelize.STRING,
    youtube_id: Sequelize.STRING
})

const Albums = sequelize.define('album',{
    title: Sequelize.STRING,
    album_art: Sequelize.STRING
})


function getSong(term) {
    return new Promise((resolve, reject) => {
        console.log(term)
        Song.findAll({
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
        Albums.findAll({
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


// function getAllSongs(){
//     return new Promise((resolve, reject)=>{
//         Song.finaAll({
//             where:{
//                 id: this
//             }
//         })
//     })
// }