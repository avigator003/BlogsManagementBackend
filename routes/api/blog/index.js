const router = require('express').Router()
const controller = require('./blog.controller')

router.post('/update/:id', controller.update)
router.get('/list', controller.showAll)
router.post('/delete/:id', controller.delete)
router.post('/create', controller.create)
router.get('/view/:id', controller.view)

module.exports = router
