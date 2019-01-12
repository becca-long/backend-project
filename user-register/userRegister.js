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

const Sequelize = require('sequelize')
const sequelize = require('../sequlizeSetup')



const User = sequelize.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING
})


function createNewUser(userName, hash, firstName, lastName) {
    console.log('Hi')
    // const newUser = User.build({
    //     userName: userName,
    //     password: hash,
    //     firstname: firstName,
    //     lastname: lastName
    // })

    User
        .create({
            userName: userName,
            password: hash,
            firstname: firstName,
            lastname: lastName
        })
        // .save()
        .then(()=>{console.log('YAY')})
        .catch((er)=>{
            console.log(er)
        })

    // console.log(userName, hash, firstName, lastName)   

    // newUser.save()
    // .then(()=>{
    //     console.log('YAY')
    //     return
    // })
    // .catch(()=>{
    //     console.log('FAIL')
    //     return
    // })


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
                        createNewUser(userName, hash, firstName, lastName)
                        res.json({
                            success: true
                        })
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