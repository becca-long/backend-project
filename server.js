const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const passport = require('passport')
const routerOauth = require('./passport/oauth-passport.js')
const ejs = require('ejs')

const session = require('express-session')

const sessionsObj = {
  secret: 'copycat secret',
  resave: 'false',
  saveUninitialized: 'false',
  cookie: {}

}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sessionsObj))

module.export = app
// setting the view engine to look for ejs files
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(__dirname + '/public'))

// setting all require files
app.use(require('./passport/oauth-passport.js'))
app.use(require('./user-register/userRegister'))
app.use(require('./passport/local-passport'))
app.use(require('./routes/userSearch'))
app.use(require('./routes/userPlaylist'))
app.use(require('./routes/createPlaylist'))

app.use(require('./routes/dashboard'))

// LOGOUT

app.get('/user/logout', (req, res) => {
  if (req.session) {

    delete req.session.user
    console.log(req.session)
    res.redirect('/login')
  }
})

app.get('/', (req, res) => {
  res.redirect('/login')
})


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('App listening on port ' + port)
})
