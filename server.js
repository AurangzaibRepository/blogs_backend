const express = require('express')
const cors = require('cors')
const console = require('console')
require('dotenv').config()
const config = require('./config')
const db = require('./app/models')

const app = express()
const corsOptions = {
    origin: config.cors_origin_url,
}

app.use(cors(corsOptions))
app.use(express.json())
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Base route')
})

const PORT = config.application_port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
