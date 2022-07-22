const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        required: true
    },
    ongoing:
    {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Project', ProjectSchema)