const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const dotenv = require('dotenv')

// Setup the app
let app = express()

// Use some middlewares
app.use(cors(), express.json(), morgan('tiny'))

// Require the config file & use it
let configPath = { path: path.join(__dirname, '/config/config.env') }
dotenv.config(configPath)

// Listen
let port = process.env.PORT
app.listen(port, () => console.log(`Running on: http://localhost:${port}`))