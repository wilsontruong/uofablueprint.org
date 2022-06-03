const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const dotenv = require('dotenv')

const membersRouter = require('./routes/members')

// general setup
const PORT = 6060
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

app.listen(PORT, () => {
    console.log(`uofablueprint.org-backend listening on port ${PORT}`)
})
