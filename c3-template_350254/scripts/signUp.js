function users(n,e,p){
 this.name=n
 this.email=e
 this.password=p
}

let signup=() =>{

    let arr= JSON.parse(localStorage.getItem("details")) || []

    let name=document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;

    let user= new users(name,email,password);

    arr.push(user)


    if(name.length == 0){
        alert("Enter Valid Name")
    }else if(email.length == 0){
        alert ("Enter Valid Email")
    }else if(password.length == 0){
        alert ("Please Enter Password")
    }else{
        localStorage.setItem("details", JSON.stringify(arr));
    }
}