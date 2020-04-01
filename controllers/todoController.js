require("dotenv").config()
const {Todo} = require("../models");
const axios = require("axios")

class Controller{

    static getTodos(req,res){

        let option={where:{UserId:req.user.id}}
        Todo.findAll(option)//req.user.id adalah token
        .then(data=>{
            
            res.status(200).json({data})
        })
        .catch(err=>{
            
            res.status(500).json(err)
        })
    }

    static getTodoId(req,res){
        let id = req.params.id
        Todo.findAll({where:{id:id}})
        .then(data=>{
            res.status(200).json({data})
        })
        .catch(err=>{
            res.status(404).json({message:"data not found!!!"})
        })
    }

    static addTodo(req,res){
        
        let obj={
            title:req.body.title,
            description:req.body.description,
            status:req.body.status,
            due_date:req.body.due_date,
            UserId:req.user.id//dari authentication decoded
        }
        
        Todo.create(obj)
        .then(data=>{
            res.status(201).json({data})
        })
        .catch(err=>{
            if(err.errors){
                let errData= [];
                for(let i=0;i<err.errors.length;i++){
                    errData.push({message:err.errors[i].message})
                }
                res.status(400).json(errData)
            }
            else{
                res.status(500).json(err)
            }

        })
    }

    static update(req,res){
        let id=req.params.id
        let newData={
            title:req.body.title,
            description:req.body.description,
            status:req.body.status,
            due_date:req.body.due_date
        }
        Todo.update(newData,{where:{id:id}})
        .then(data=>{
            if(data){
                res.status(200).json(newData)
            }
            else{
                res.status(404).json({
                    message:"data not updated / not found"
                })
            }
        })
        .catch(err=>{
            if(err.errors){
                let errData= [];
                for(let i=0;i<err.errors.length;i++){
                    errData.push({message:err.errors[i].message})
                }
                res.status(400).json(errData)
            }
            else{
                res.status(500).json(err)
            }

        })
    }

    static deleteToDo(req,res){
        let id=req.params.id
        Todo.destroy({where:{id:id}})
        .then(data=>{
            if(data){
                res.status(201).json({message:"Data has been removed"})
            }
            else{
                res.status(404).json({message:"error data not found"})
            }
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static weather(req,res){
        axios({
            method:"GET",
            url:`https://api.openweathermap.org/data/2.5/weather?q=Jakarta,id&appid=${process.env.API_WEATHER}`
        })
            .then(function(response){
                // handle success
                res.status(200).json(response.data)
            })
            .catch(function(error){
                // handle error
                res.status(404).json(error)
            })
    }

    static calendar(req,res){
        axios({
            method:"GET",
            url:`https://calendarific.com/api/v2/holidays?&api_key=${process.env.API_CALENDAR}&country=ID&year=2020`})
            .then(function(response){
                // handle success
                // console
                res.status(200).json(response.data)
            })
            .catch(function(error){
                // handle error
                res.status(404).json(error)
            })
    }
}
module.exports=Controller;

