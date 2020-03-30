const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/",todoController.getTodos);
router.get("/:id",todoController.getTodoId);
router.post("/",todoController.addTodo);
router.put("/:id",todoController.update)
router.delete("/:id",todoController.deleteToDo)

module.exports=router;