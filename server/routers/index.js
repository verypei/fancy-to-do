const router = require('express').Router()

const todosRoutes = require('./todoRouter');
const usersRoutes = require('./userRouter');

router.use('/users', usersRoutes)
router.use('/todos',todosRoutes)


module.exports = router