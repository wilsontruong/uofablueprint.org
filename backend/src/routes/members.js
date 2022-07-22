const express = require('express')
const membersController = require('../controllers/members')

const router = express.Router()

router.get('/', membersController.getAll)
router.get('/:memberId', membersController.getOne)
router.post('/', membersController.create)
router.delete('/:memberId', membersController.delete)
router.put('/:memberId', membersController.update)

module.exports = router
