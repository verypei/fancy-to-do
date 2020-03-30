const {toDo} = require("../models");

class Controller{

    static getTodos(req,res){
        toDo.findAll()
        .then(data=>{
            res.status(200).json({data})
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static getTodoId(req,res){
        let id = req.params.id
        toDo.findAll({where:{id:id}})
        .then(data=>{
            res.status(200).json({data})
        })
        .catch(err=>{
            res.status(404).json({message:"data not found!!!"})
        })
    }

    static addTodo(req,res){
        let obj={
            title,
            description,
            status:false,
            due_date
        }
        toDo.create(obj)
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
        toDo.findAll(newData,{where:{id:id}})
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
        toDo.destroy({where:{id:id}})
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
}
module.exports=Controller;