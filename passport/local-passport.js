const express = require('express')
const router = express.Router()


const app = require('../server')

const bcrypt = require('bcrypt')


const bodyParser = require('body-parser');

module.exports = router


// POSTGRESS INSTANCES
const db = require('../models')





const passport = require('passport')
router.use(passport.initialize());
router.use(passport.session());


router.get('/error', (req, res) => res.send("Error logging in. Please register"));

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
        if (username) {
            db.user.findOne({
                    where: {
                        username: username
                    }
                })
                .then((user) => {
                    if (!user) {
                        return done(null, undefined, {
                            message: "Unknown email"
                        })
                        // HAVE THEM RENDER SHOW SIGNUP BUTTON
                    }
                    // COMPARES THE HASHED PASSWORDS
                    bcrypt.compare(password, user.dataValues.password)
                        .then((res) => {
                            if (res) {
                                // IF TRUE RETURN DONE SUCCESS
                                return done(null, user.dataValues)
                            } else {
                                // ELSE WILL NOT LOG IN
                                return done(null, undefined, {
                                    message: "Inccorect password"
                                })
                            }
                        })
                        .catch((er) => {
                            console.log(er)
                        })

                })
                .catch((er) => {
                    console.log(er)
                })
        } else {
            console.log('No username')
        }

    }))

renderObject = {
    pageTitle: "login",
    pgeaID: "login",
    display: '',
    errorMessage: ''
}





router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (user) {
            // redirect them to PLAYLIST
            // Add seed
            let sessData = req.session
            sessData.user = user
            res.redirect('/dashboard')
        } else {
            renderObject.display = 'block'
            renderObject.errorMessage = info.message
            res.render('login', renderObject)

        }
    })(req, res, next);
});




router.get('/login', (req, res) => {
        if(req.session.user){
            res.redirect('/dashboard')
        }{
        console.log('In local-passport', req.session)
        renderObject.display = 'none'
        renderObject.errorMessage = ''
        res.render('login', renderObject)
        }

})