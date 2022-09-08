const mongoose = require('mongoose')

const studApplyStepsSchema = mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    title:
    {
        type: String,
        required: true
    },
    body:
    {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('studentSteps', studApplyStepsSchema)
