const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const dotenv = require('dotenv')

const membersRouter = require('./routes/members')
const projectsRouter = require('./routes/projects')

// general setup
const app = express()
dotenv.config()

// connect to mongodb
mongoose.connect(process.env.MONGODB_ADDR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// handle routing
app.use(bodyParser.json())
app.use('/members', membersRouter)
app.use('/projects', projectsRouter)

module.exports = app
