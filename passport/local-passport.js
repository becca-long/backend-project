const express = require('express')
const router = express.Router()


const app = express();

const bcrypt = require('bcrypt')


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

module.exports = router


// POSTGRESS INSTANCES
const db = require('../models')





const passport = require('passport')
router.use(passport.initialize());
router.use(passport.session());

router.get('/success', (req, res) => res.send("Welcome " + req.query.username + "!!"));
router.get('/', (req, res) => res.send("Error logging in. Please register"));

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    db.user.findById(id)
        .then((err, user) => {
            cb(err, user);
        });
});

/* PASSPORT LOCAL AUTHENTICATION */


const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
function (username, password, done) {
    db.user.findOne({
            where: {
                username: username
            }
        })
        .then((user) => {
            if (!user) {
                return done(null, undefined)
            }
            // COMPARES THE HASHED PASSWORDS
            bcrypt.compare(password, user.dataValues.password)
                .then((res) => {
                    if (res) {
                        // IF TRUE RETURN DONE SUCCESS
                        return done(null, user.dataValues)
                    } else {
                        // ELSE WILL NOT LOG IN
                        return done(null, undefined)
                    }
                })
                .catch((er) => {
                    console.log(er)
                })

        })
        .catch((er) => {
            console.log(er)
        })
    }))


// TAKES USERS LOGIN AND PASSWORD AND AUTHENTICATES IT
router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/'
    }),
    function (req, res) {
        console.log('Req.user', req.user)
        res.redirect('/success?username=' + req.user.username);
    });