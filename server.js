const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const router = require('./routes/route')

app.use('/api/', router)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})