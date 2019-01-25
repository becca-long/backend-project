const express = require('express')
const router = express.Router()
const db = require('../models/')
const session = require('express-session')
const app = express()

// db.playlist.findAll().then(function (res) {
//   console.log(res)
// })
router.get('/dashboard', (req, res) => {
  console.log(req.session.user.id)
  let userId = req.session.user.id
  let title = []
  db.playlist_data.findAll({
    where: { user_id: userId },
    attributes: ['playlist_title']
  }).then((result) => {
    result.forEach((elm) => {
      title.push(elm)
    })
  })
  res.render('index', {
    pageTitle: 'playlist',
    pageId: 'playlist',
    data: 'hello',
    username: req.session.user.username,
    title: title
  })
})

// router.get('/dashboard', (req, res) => {
//   console.log(req.session.user.username)
//   let userId = req.session.user.id
//   let titlesArray = []
//   function getUserPlaylists (userId) {
//     db.user_playlist.findAll({
//       where: { user_id: userId },
//       attributes: ['playlist_id']
//     })
//       .then((result) => {
//         db.playlist.findAll({
//           where: { id: result.map(el => {
//             return el.dataValues.playlist_id
//           })

//           },
//           attributes: ['title']
//         }).then((finalArray) => {
//           finalArray.forEach((elm) => {
//             titlesArray.push(elm)
//           })
//           console.log('HELLO')
//           console.log(titlesArray)
//           res.render('sidebar', {
//             pageTitle: 'playlist',
//             pageID: 'playlist',
//             data: 'hello',
//             title: titlesArray
//           })
//         })
//       })
//   }
//   res.render('index', {
//     pageTitle: 'home',
//     pageID: 'home',
//     username: req.session.user.username,
//     title: titlesArray
//   })
// })
module.exports = router

// console.log(req.session)
