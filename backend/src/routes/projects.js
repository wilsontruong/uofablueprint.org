const express = require('express')
const projectsController = require('../controllers/projects')
const {verifyApiKey} = require('../services/verifyApiKey')

const router = express.Router()

router.get('/all', verifyApiKey, projectsController.getAll) // Get all projects
router.get('/:projectId', verifyApiKey, projectsController.getProject) // Get a project by id
router.post('/', verifyApiKey, projectsController.create) // Create a new project
router.put('/:projectId', verifyApiKey, projectsController.update) // Update a project
router.delete('/:projectId', verifyApiKey, projectsController.delete) // Delete a project

module.exports = router