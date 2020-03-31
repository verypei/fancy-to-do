
const {Todo} = require('../models')

//authorization digunakan untuk mencari data todo yg user id nya sama dengan org yg sedang login

function authorization(req, res, next){
    // console.log(req.userdata.id)
    Todo.findAll({
        where: {UserId: req.userdata.id}
    })
    .then(data=>{
        next()
    })
    .catch(err=>{
        res.status(500).json(err.message)
    })
}

module.exports = authorization