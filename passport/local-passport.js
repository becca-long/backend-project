const express = require('express')
const router = express.Router()



const Sequelize = require('sequelize')
const sequelize = require('../sequlizeSetup')


module.exports = router


// POSTGRESS INSTANCES


const User
// User = sequelize.define('USERINFO TABLE', {
//     userName: Sequelize.STRING,
//     password: Sequelize.STRING,
//     createdAt: Sequelize.literal('NOW()'),
//     updatedAt: Sequelize.literal('NOW()')
// })



const passport = require('passport')
router.use(passport.initialize());
router.use(passport.session());

router.get('/success', (req, res) => res.send("Welcome " + req.query.username + "!!"));
router.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    User.findById(id)
        .then((err, user) => {
            cb(err, user);
        });
});

/* PASSPORT LOCAL AUTHENTICATION */

const LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy(
//     function (username, password, done) {
//         User.findOne({
//                 where: {
//                     userName: username
//                 }
//             })
//             .then((user) => {
//                 // if (err) {
//                 //     return done(err);
//                 // }
//                 if (!user) {
//                     return done(null, undefined)
//                 }

//                 // FUNCTION TO CHECK PASSWORD
//                 // if (!user.verifyPassword(password)) {
//                 //     return done(null, undefined);
//                 // }
//                 console.log('user', user)
//                 return done(null, user.dataValues)
//             })
//             .catch((er) => {
//                 console.log(er)
//             })
//     }
// ));

// router.post('/',
//     passport.authenticate('local', {
//         failureRedirect: '/error'
//     }),
//     function (req, res) {
//         console.log('Req.user', req.user)
//         res.redirect('/success?username=' + req.user.userName);
//     });



//TODO
// CREATE VERIFY PASSWORD WITH HASH
// https://www.npmjs.com/package/bcrypt-nodejs