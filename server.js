const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')

require('dotenv').config()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const router = require('./routes/route')

app.use('/api/', router)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))