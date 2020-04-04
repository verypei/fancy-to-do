$(document).ready(function(){//cek untuk pengujian token

    let token = localStorage.getItem("token")
    if(token){//jika token ketemu
        $("#tableTodos").show()
        //function show todo
        todoShow()
    }
    else{
        $("#registerForm").show()//sebelum input token
    }
})
//perpindahan ke atau dari login form 
$("#moveToLogin").on("click",()=>{
    $("#registerForm").hide()
    $("#loginForm").show()   
})

$("#moveToRegister").on("click",()=>{
    $("#loginForm").hide()
    $("#registerForm").show()
})

//fungsi ajax submit register
$("#submitRegister").submit((event)=>{
    
    event.preventDefault()
    
    let obj = {
        email:$("#email").val(),
        username:$("#username").val(),
        password:$("#password").val()
    }
    $.ajax({
        type:"POST",
        url:"http://localhost:3000/users/register",
        data:obj
    })
    .done(data=>{
        login();
    })
    .fail(err=>{
        $("#errorRegister").text("register failed")
    })
})

//function show hide login register
function login(){
    $("#registerForm").hide()
    $("#loginForm").show()
}

function register(){
    $("#loginForm").hide()
    $("#registerForm").show()
}