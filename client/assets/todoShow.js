


function todoShow(){
    let token=localStorage.getItem("token")
    // console.log(token)
    $.ajax({
        type:"GET",
        url:"http://localhost:3000/todos",
        headers:{token:token}
    })
    .done(data=>{
        let todo=data.data
        // console.log(data.data,";;;;;;;;;;;;;;;;")
        for(let i = 0;i<todo.length;i++){
            $("#dataBaseRender").append(`
            <tr>
            <td>${todo[i].id}</td>
            <td>${todo[i].title}</td>
            <td>${todo[i].description}</td>
            <td>${todo[i].status}</td>
            <td>${todo[i].due_date}</td>
            <td>
                <button id="editButton" onclick=editTodos(${todo[i].id})>edit</button>
                <button id="deleteButton" onclick=deleteTodos(${todo[i].id})>delete</button>
            </td>
            </tr>
            `)
        }
    })
    .fail(err=>{
        console.log(err)
    })
}

function deleteTodos(id){
    
    let token=localStorage.getItem("token")

    $.ajax({
        type:"DELETE",
        url:`http://localhost:3000/todos/${id}`,
        headers:{token:token}}
    )
    .done(response=>{
        $("#dataBaseRender").empty()
        todoShow()
    })
    .fail(err=>{
        $("#errorDelete").text("delete failed")
    })
}

function editTodos(id){
    
    let token=localStorage.getItem("token")

    $.ajax({
        type:"GET",
        url:`http://localhost:3000/todos/${id}`,
        headers:{token:token}}
    )
    .done(data=>{
        $("#tableTodos").hide()
        $("#editForm").show()
        $("#edit-form").append(`

            <input type="hidden" class="form-control" id="editId" name="name" value="${data.data[0].id}">
      

            <div class="form-group">
                <label for="usr">Title:</label>
                <input type="text" class="form-control" id="editTitle" name="name" value="${data.data[0].title}">
            </div>

            <div class="form-group">
                <label for="pwd">Description:</label>
                <input type="text" class="form-control" id="editDesc" name="email" value="${data.data[0].description}">
            </div>

            <div class="form-group">
                <label for="pwd">Status:</label>
                <input type="text" class="form-control" id="editStatus" name="status" value="${data.data[0].status}">
            </div>

            <div class="form-group">
                <label for="pwd">Due Date:</label>
                <input type="date" class="form-control" id="editDate" name="due_date" value="${data.data[0].due_date}">
            </div>

            <button id="editSubmit" type="submit"  class="btn btn-black">Submit</button>`)
            // editSubmit()
    })
    .fail(err=>{
        $("#errorDelete").text("delete failed")
    })
}


$("#edit-form").submit(()=>{
    // console.log("submit================================= in")
    event.preventDefault()
    let id= $("#editId").val()
    let token=localStorage.getItem("token")
    let obj = {
        title: $("#editTitle").val(),
        desc: $("#editDesc").val(),
        status: $("#editStatus").val(),
        due_date: $("#editDate").val()
    }
    
    console.log(obj,"............")
    $.ajax({
        type:"PUT",
        url:`http://localhost:3000/todos/${id}`,
        headers:{token:token},
        data:obj
    })
    .done(response=>{
        $("#editForm").hide()
        $("#dataBaseRender").empty()
        todoShow()
    })
    .fail(err=>{
        $("#errorEdit").text("edit failed")
    })
})


// render add format
$("#addTodos").on("click",()=>{
    $("#tableTodos").hide()
    $("#divAdd").show()
})
//submit add todos
$("#add-form").submit(()=>{
    let token=localStorage.getItem("token")

    let obj = {
        title:$("#title").val(),
        description:$("#description").val(),
        status:false,
        due_date:$("#due_date").val()
    }
    $.ajax({
        type:"POST",
        url:"http://localhost:3000/todos",
        headers:{token:token},
        data:obj
    })
    .done(data=>{
        // login();
    })
    .fail(err=>{
        $("#errorRegister").text("register failed")
    })
})