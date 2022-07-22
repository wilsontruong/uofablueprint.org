const express = require('express')
const projectsController = require('../controllers/projects')

const router = express.Router()

router.get('/all', projectsController.getAll) // Get all projects
router.get('/:projectId', projectsController.getProject) // Get a project by id
router.post('/', projectsController.create) // Create a new project
router.put('/:projectId', projectsController.update) // Update a project
router.delete('/:projectId', projectsController.delete) // Delete a project

module.exports = router