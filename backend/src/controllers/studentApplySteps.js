const studentSteps = require('../models/studentApplySteps.js')


module.exports = {
    getAll: async (req, res) => {
        try {
            const steps = await studentSteps.find()
            res.json(steps)
        } catch (err) {
            res.json({ message: err })
        }
    },
    getStep: async (req, res) => {
        try {
            const step = await studentSteps.findById(req.params.stepsId)
            res.json(step)
        } catch (err) {
            res.json({ message: "Step with the given ID was not found" })
        }
    },
    create: async (req, res) => {
        const step = new studentSteps(req.body)
        try {
            const newSteps = await studentSteps.create(step)
            res.json(newSteps)
        } catch (err) {
            res.json({ message: err })
        }
    },
    update: async (req, res) => {
        const checkStep = await studentSteps.findOne({
            _id: req.params.stepsId,
        })
        if (!checkStep)
            return res.json({ message: 'Step with the given ID was not found' })

        try {
            const updateSteps = await studentSteps.findByIdAndUpdate(
                req.params.stepsId,
                req.body
            )
            res.json({ message: 'Step updated!' })
        } catch (err) {
            res.json({ message: err })
        }
    },
    delete: async (req, res) => {
        const checkSteps = await studentSteps.findOne({
            _id: req.params.stepsId,
        })
        if (!checkSteps)
            return res.json({ message: 'Steps do not exist' })

        try {
            const deleteSteps = await studentSteps.deleteOne({
                _id: req.params.stepsId,
            })
            res.json(deleteSteps)
        } catch (err) {
            res.json({ message: err })
        }
    },
}