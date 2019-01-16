const express = require('express')
const router = express.Router()
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

const getData = require('../sequlize/sequlize')

module.exports = router


/*
*   CALL BY 
*   EXAMPLE AXIOS
*   axios.get('/api/copy-cat/search?term=' ')
*/
router.get('/api/copy-cat/search', (req, res)=>{
    console.log('Someone called the /api/copy-cat/serch')
    let term = req.query.term
    console.log('This is the term', term)
    getData.getSong(term)
        .then((itm)=>{
            res.json(itm)
        })
        
    
})