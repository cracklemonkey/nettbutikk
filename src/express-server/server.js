const express = require('express')
const path = require('path')
const bp = require('body-parser')
const router = express.Router()

const app = express()

const port = 4000

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

require('./routes/products.route')(app)
require('./routes/comments.route')(app)


app.get('/', (req, res) => {
    res.send('Hello ')
})

app.listen(port, () => {
    console.log(`this server running on port${port}`);
})