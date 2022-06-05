const Member = require('../models/Member')

module.exports = {
    getAll: async (req, res) => {
        try {
            const members = await Member.find()
            res.json(members)
        } catch (err) {
            res.json({ message: err })
        }
    },
    getOne: async (req, res) => {
        try {
            const member = await Member.findById(req.params.memberId)
            res.json(member)
        } catch (err) {
            res.json({ message: err })
        }
    },
    create: async (req, res) => {
        const member = new member(req.body)
        try {
            const savedmember = await Member.save()
            res.json(savedmember)
        } catch (err) {
            res.json({ message: err })
        }
    },
    delete: async (req, res) => {
        try {
            const deletedmember = await Member.deleteOne({
                _id: req.params.memberId,
            })
            res.json(deletedmember)
        } catch (err) {
            res.json({ message: err })
        }
    },
    update: async (req, res) => {
        try {
            const updatedmember = await Member.updateOne(
                { _id: req.params.memberId },
                { $set: req.body }
            )
            res.json(updatedmember)
        } catch (err) {
            res.json({ message: err })
        }
    },
}
