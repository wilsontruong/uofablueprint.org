const express = require('express')
const membersController = require('../controllers/members')
const {verifyApiKey} = require('../services/verifyApiKey')
const router = express.Router()

router.get('/', verifyApiKey, membersController.getAll)
router.get('/:memberId', verifyApiKey, membersController.getOne)
router.post('/', verifyApiKey, membersController.create)
router.delete('/:memberId', verifyApiKey, membersController.delete)
router.put('/:memberId', verifyApiKey, membersController.update)

module.exports = router
