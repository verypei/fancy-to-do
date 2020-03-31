const express = require("express");
const router = express.Router();
const auth = require("../middleware/authentication");
const todoController = require("../controllers/todoController");

router.get("/",auth,todoController.getTodos);
router.get("/:id",auth,todoController.getTodoId);
router.post("/",auth,todoController.addTodo);
router.put("/:id",auth,todoController.update)
router.delete("/:id",auth,todoController.deleteToDo)

module.exports=router;