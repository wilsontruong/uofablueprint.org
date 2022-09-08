const express = require('express')
const studApplyStepsController = require('../controllers/studentApplySteps')
const {verifyApiKey} = require('../services/verifyApiKey')

const router = express.Router()

router.get('/all', verifyApiKey, studApplyStepsController.getAll) // Get all projects
router.get('/:stepsId', verifyApiKey, studApplyStepsController.getStep) // Get a project by id
router.post('/', verifyApiKey, studApplyStepsController.create) // Create a new project
router.put('/:stepsId', verifyApiKey, studApplyStepsController.update) // Update a project
router.delete('/:stepsId', verifyApiKey, studApplyStepsController.delete) // Delete a project

module.exports = router