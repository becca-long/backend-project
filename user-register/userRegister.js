const express = require('express')
const router = express.Router()
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = router

const db = require('../models')


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



//CHECKS IF USER EXISTING OR NOT

function checkIfExisting(username) {
    db.user.findOne({
            where: {
                username: username
            }
        })
        .then((user) => {
            if (user === username) {
                console.log('false')
                return true
            }
            if (user !== username) {
                return false
            }
        })
}



router.post('/api/create/username/:userName', (req, res) => {
    let userName = req.params.userName
    let password = req.body.password
    let firstName = req.body.firstname
    let lastName = req.body.lastname
    // CHECKING IF USERNAME IS NOT UNDEFINED
    if (req.params.userName) {
        // IF PASSWORD IS UNDEFINED RETURN
        if (!password) {
            console.log('No password')
            return
        }
        // IF PASSWORD IS DEFINED, HASH AND STORE USERNAME
        if (password) {
            // HASH AND SALT THE USER PASSWORD
            bcrypt.hash(password, saltRounds)
                .then((hash) => {
                    if (hash) {
                        //IF USER DOES NOT EXIST
                        if (!checkIfExisting(userName)) {
                            createNewUser(userName, hash, firstName, lastName)
                            res.json({
                                success: true
                            })
                        }else{
                            res.json({error: 'Username is already taken'})
                        }
                    }
                })
                .catch((er) => {
                    console.log(er)
                })
        }

    } else if (!req.params.userName) {
        console.log('User name is undefined')
    }
})