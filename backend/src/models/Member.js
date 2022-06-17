const mongoose = require('mongoose')

const MemberSchema = mongoose.Schema({
    name: String,
    role: String,
})

module.exports = mongoose.model('Member', MemberSchema)
