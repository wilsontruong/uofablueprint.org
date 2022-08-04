const Project = require('../models/Project')

module.exports = {
    getAll: async (req, res) => {
        try {
            const projects = await Project.find()
            res.json(projects)
        } catch (err) {
            res.json({ message: err })
        }
    },
    getProject: async (req, res) => {
        try {
            const project = await Project.findById(req.params.projectId)
            res.json(project)
        } catch (err) {
            res.json({ message: err })
        }
    },
    create: async (req, res) => {
        const project = new Project(req.body)
        try {
            const newProject = await Project.create(project)
            res.json(newProject)
        } catch (err) {
            res.json({ message: err })
        }
    },
    update: async (req, res) => {
        const checkProject = await Project.findOne({
            _id: req.params.projectId,
        })
        if (!checkProject)
            return res.json({ message: 'Project does not exist' })

        try {
            const project = await Project.findByIdAndUpdate(
                req.params.projectId,
                req.body
            )
            res.json({ message: 'Project updated!' })
        } catch (err) {
            res.json({ message: err })
        }
    },
    delete: async (req, res) => {
        const checkProject = await Project.findOne({
            _id: req.params.projectId,
        })
        if (!checkProject)
            return res.json({ message: 'Project does not exist' })

        try {
            const project = await Project.deleteOne({
                _id: req.params.projectId,
            })
            res.json(project)
        } catch (err) {
            res.json({ message: err })
        }
    },
}
