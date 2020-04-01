const {User} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

class Controller{

    static register(req,res){
        let obj={
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
        }
        User.create(obj)
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static login(req,res){

        let email=req.body.email
        let password=req.body.password
        User.findOne({
            where:{
                email:email
            }
        })
        .then(data=>{
            // console.log(data,"==========================")
            if(!data){
                res.status(400).json('email wrong')
            } else {
                if(bcrypt.compareSync(req.body.password, data.password)){
                    let token = jwt.sign({id: data.id, username:data.username, email: data.email}, 'secret')
                    res.status(200).json({token: token})
                } else {
                    res.status(400).json('password wrong')
                }
            }
        })
        .catch(err=>{
            res.status(404).json(err)
        })
    }
}
module.exports=Controller