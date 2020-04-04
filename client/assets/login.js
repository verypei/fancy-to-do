$("#loginForm").submit((event)=>{
    
    event.preventDefault()
    
    let obj = {
        email:$("#emailLogin").val(),
        password:$("#passwordLogin").val()
    }
    $.ajax({
        type:"POST",
        url:"http://localhost:3000/users/login",
        data:obj
    })
    .done(data=>{
        localStorage.setItem('token', data.token)//token to local storage
        afterLogin()

    })
    .fail(err=>{
        $("#errorLogin").text("login failed")
    })
})

//function after login
function afterLogin(){
    $("#loginForm").hide()
    $("#tableTodos").show()
}

function showTodo(){
    $.ajax({
        type:"GET",
        url:"http://localhost:3000/todos",
        // data:obj
    })
    .done(data=>{
        for(let i=0;i<data.length;i++){

        }
    })
    .fail(err=>{
        $("#errorRegister").text("register failed")
    })
}