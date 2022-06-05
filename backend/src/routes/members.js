const express = require('express')
const membersController = require('../controllers/members')

const router = express.Router()

router.get('/', membersController.getAll)
router.get('/:movieId', membersController.getOne)
router.post('/', membersController.create)
router.delete('/:movieId', membersController.delete)
router.put('/:movieId', membersController.update)

module.exports = router
