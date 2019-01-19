const express = require('express')
const router = express.Router()

module.exports = router

const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: false
}))
// ALL SUCCESS PATHS SHOULD REDIRECT TO THE SAME THING
const db = require('../models')




/*  PASSPORT SETUP  */


const passport = require('passport')


router.get('/error', (req, res) => res.send("error logging in"))

passport.serializeUser(function (user, cb) {
    cb(null, user)
})

passport.deserializeUser(function (obj, cb) {
    cb(null, obj)
})




/*  FACEBOOK AUTH  */

const FacebookStrategy = require('passport-facebook').Strategy

const FACEBOOK_APP_ID = '216136155960531'
const FACEBOOK_APP_SECRET = '57bee9443c6964d6725391937acc3460'

passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "/facebook/callback"
    },
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile)
        db.user.findOrCreate({
                where: {
                    username: profile.displayName
                },
                defaults: {
                    firstname: profile.displayName
                }
            })
            .spread((user, created) => {
                console.log(user.get({
                    plain: true
                }))
                console.log(created)
            })


        return cb(null, profile)
    }
))

router.get('/auth/facebook',
    passport.authenticate('facebook'))

router.get('/facebook/callback',
    passport.authenticate('facebook', {
        failureRedirect: '/auth/error'
    }),
    // TODO UPDATE WHERE IT REDIRECTS TO
    function (req, res) {
        let sessData = req.session
        sessData.user = req.user.username
        res.redirect('/success/')
    })




/* GITHUB AUTH */
const GitHubStrategy = require('passport-github').Strategy

const GITHUB_CLIENT_ID = "Iv1.3cc7ee40badc94a0"
const GITHUB_CLIENT_SECRET = "07c906890c53fee6314e80d61ec49c444e25edeb"

passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback"
    },
    function (accessToken, refreshToken, profile, cb) {
        db.user.findOrCreate({
                where: {
                    username: profile.username
                },
                defaults: {
                    firstname: profile.username
                }
            })
            .spread((user, created) => {
                console.log(user.get({
                    plain: true
                }))
                console.log(created)
            })


        return cb(null, profile)
    }
))

router.get('/auth/github',
    passport.authenticate('github'))

router.get('/auth/github/callback',
    passport.authenticate('github', {
        failureRedirect: '/error'
    }),
    function (req, res) {
        let sessData = req.session
        sessData.user = req.user.username
        res.redirect('/success/')
    })




/* GOOGLE AUTH */