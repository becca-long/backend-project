const express = require('express')
const router = express.Router()
const db = require('../models')
const validator = require('email-validator')






const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: false
}))

const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = router



const renderObject = {
    pageTitle: "Register",
    pageiD: "REGISTER",
    message: '',
    displayMessage: 'none',
    password: '',
    displayPass: 'none',
    fNameMessage: '',
    fNameCss: 'none',
    lNameMessage: '',
    lNameCss: 'none'

}

function createNewUser(userName, hash, firstName, lastName) {
    db.user
        .create({
            username: userName,
            password: hash,
            firstname: firstName,
            lastname: lastName
        })
        // .save()
        .then(() => {
            console.log('YAY')
        })
        .catch((er) => {
            console.log('This is er', er)
        })
}

// CHECKS IF USER EXISTING OR NOT

function checkIfExisting(username) {
    console.log(username)
    db.user.findOne({
            where: {
                username: username
            }
        })
        .then((user) => {
            if (user) {

                let dataUser = user.dataValues.username
                if (dataUser === username) {
                    return true
                }
                if (dataUser !== username) {
                    return false
                }
            } else {
                return false;
            }
        })
        .catch((er) => {
            console.log(er)
        })
}





router.post('/signup', (req, res) => {
    let userName = req.body.username
    let password = req.body.password
    let firstName = req.body.firstname
    let lastName = req.body.lastname
    console.log(userName, password, firstName, lastName)

    if (userName) {
        if (validator.validate(userName)) {
            console.log('Valid email')
            renderObject.displayMessage = 'none'
            renderObject.message = ""
            if (password) {
                renderObject.displayPass = 'none'
                renderObject.password = ''
                if (!firstName) {
                    renderObject.fNameMessage = 'Required First Name'
                    renderObject.fNameCss = 'block'
                    res.render('userRegister', renderObject)
                }
                if (!lastName) {
                    renderObject.lNameMessage = 'Required Last Name'
                    renderObject.lNameCss = 'block'
                    res.render('userRegister', renderObject)
                }
                // HASH AND SALT THE USER PASSWORD
                renderObject.fNameMessage = ''
                renderObject.fNameCss = 'none'
                renderObject.lNameMessage = ''
                renderObject.lNameCss = 'none'
                bcrypt.hash(password, saltRounds)
                    .then((hash) => {
                        if (hash) {
                            // IF USER DOES NOT EXIST
                            if (!checkIfExisting(userName)) {
                                renderObject.displayMessage = 'none'
                                renderObject.message = ""
                                createNewUser(userName, hash, firstName, lastName)
                                user = {}
                                let sessData = req.session
                                sessData.user = {username:userName, password:hash, firstname: firstName, lastname: lastName}
                                res.redirect('/dashboard')
                            } else {
                                renderObject.displayMessage = 'block'
                                renderObject.message = "Email already taken"
                                res.render('userRegister', renderObject)
                            }
                        }
                    })
                    .catch((er) => {
                        console.log(er)
                    })
            } else {
                console.log('No password')
                renderObject.displayPass = 'block'
                renderObject.password = 'No password'
                res.render('userRegister', renderObject)
            }
        } else {
            //THIS IS FOR INVALID USERNAMES
            renderObject.displayMessage = 'block'
            renderObject.message = 'Error invalid email'
            res.render('userRegister', renderObject)
        }
        // CHECKING IF USERNAME IS NOT UNDEFINED
    } else if (!req.params.userName) {
        console.log('User name is undefined')

        res.render('userRegister', renderObject)
    }

})


router



router.get('/signup', (req, res) => {
    renderObject.message = '',
        renderObject.displayMessage = 'none',
        renderObject.password = '',
        renderObject.displayPass = 'none',
        renderObject.fNameMessage = '',
        renderObject.fNameCss = 'none',
        renderObject.lNameMessage = '',
        renderObject.lNameCss = 'none'
    res.render('userRegister', renderObject)
})