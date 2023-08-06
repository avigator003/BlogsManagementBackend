const router = require('express').Router()
const authMiddleware = require('../../middlewares/auth')
const auth = require('./auth')
const user = require('./user')
const admin = require('./admin')
const blog = require('./blog')

router.use('/auth', auth)
router.use('/user', user)
router.use('/admin', admin)
router.use('/blog', blog)

module.exports = router