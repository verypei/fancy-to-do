require("dotenv").config()
const {User} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class userController{
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
            if(!data){
                res.status(400).json('email wrong')
            } else {
                if(bcrypt.compareSync(req.body.password, data.password)){
                    let token = jwt.sign({id: data.id, username:data.username, email: data.email}, process.env.JWT_SECRET)//????????????????
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

    static googleSignin(req, res, next) {
        console.log('google')
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        })
            .then(ticket => {
                const payload = ticket.getPayload();
                console.log(payload,"payloadddddddd")
                User.findOne({
                    where: {
                        email: payload.email
                    }
                })
                    .then(data => {
                        if (data) {
                            return data
                        }
                        else {
                            let obj = {
                                email: payload.email,
                                password: process.env.GOOGLE_SECRET
                            }
                            return User.create(obj)
                        }
                    })
                    .then(data => {
                        if (data) {
                            var token = jwt.sign({ id: data.id, email: data.email }, process.env.JWT_SECRET)
                        }
                        console.log(token, "tokeeeeeen")
                        res.status(200).json({ token: token })
                    })
            })
            .catch(err => {
                res.send(err)
            })
    }
}
module.exports=userController