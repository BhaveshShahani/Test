

let arr= JSON.parse(localStorage.getItem("details")) || []
let login_data= JSON.parse(localStorage.getItem("login_details")) || []



function login(arr){
    let login_email= document.getElementById("email").value;
    let login_pass= document.getElementById("password").value;
    if(login_email=="" || login_pass==""){
        alert ("Invalid Email or Password")
    }
    arr.forEach(function(elem) {
        if(login_email == elem.email && login_pass == elem.password){
            let user_login = new login_user(login_email,login_password)
            login_data.push(user_login)
            localStorage.setItem("login_details", JSON.stringify(login_data))
            alert("LogIn Success")
        }else{
            alert("Cannot Log-in")
        }
    });

         
}
function login_user(e,p){
    this.email=e
    this.password=p
}