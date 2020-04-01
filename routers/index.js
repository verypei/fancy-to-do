const router = require('express').Router()

const todosRoutes = require('./todoRouter')
const usersRoutes = require('./userRouter')
const weatherRoutes = require('./userRouter')


router.use('/users', usersRoutes)
router.use('/todos',todosRoutes)
router.use('/weather', weatherRoutes)

module.exports = router