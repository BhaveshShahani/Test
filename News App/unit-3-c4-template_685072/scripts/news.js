// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

document.getElementById("search_input").addEventListener("click", function(){
    window.location.href="./search.html";
})

let getdata= ()=>{
    let dataArr= JSON.parse(localStorage.getItem("news"));
    console.log(dataArr)
    append(dataArr);
}

function append(data){
    let container= document.getElementById("detailed_news");

    let img=document.createElement("img")
    img.src= data.urlToImage

    let Title= document.createElement("h3")
        Title.innerText= data.title;

        let des= document.createElement("p")
        des.innerText= data.content;

    container.append(img,Title,des)

    
}
getdata();
