const express = require('express')
const studApplyStepsController = require('../controllers/studentApplySteps')

const router = express.Router()

router.get('/all', studApplyStepsController.getAll) // Get all projects
router.get('/:stepsId', studApplyStepsController.getStep) // Get a project by id
router.post('/', studApplyStepsController.create) // Create a new project
router.put('/:stepsId', studApplyStepsController.update) // Update a project
router.delete('/:stepsId', studApplyStepsController.delete) // Delete a project

module.exports = router