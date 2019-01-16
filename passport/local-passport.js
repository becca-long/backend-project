const express = require('express')
const router = express.Router()


const app = express();

const Sequelize = require('sequelize')
const sequelize = require('../sequlizeSetup')


const bcrypt = require('bcrypt')


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

module.exports = router


// POSTGRESS INSTANCES



const User = sequelize.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING
})



const passport = require('passport')
router.use(passport.initialize());
router.use(passport.session());

router.get('/success', (req, res) => res.send("Welcome " + req.query.username + "!!"));
router.get('/error', (req, res) => res.send("Error logging in. Please register"));

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

passport.use(new LocalStrategy(
function (username, password, done) {
    User.findOne({
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
router.post('/api/user/login',
    passport.authenticate('local', {
        failureRedirect: '/error'
    }),
    function (req, res) {
        console.log('Req.user', req.user)
        res.redirect('/success?username=' + req.user.username);
    });