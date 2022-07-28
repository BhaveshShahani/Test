// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


document.getElementById("search_input").addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        // window.location.href="./search.html"
        getData();
    }
})

let getData= async () =>{
    let query= document.getElementById("search_input").value;
    
    const url=`https://masai-api.herokuapp.com/news?q=${query}`

    let res= await fetch(url)
    let data= await res.json();

    console.log(data.articles)
    append(data.articles)
}

let append= (data) =>{
    let container= document.getElementById("results");
    container.innerHTML=null;

    // data.forEach(({urlToImage,title,description}) => {

    data.forEach(function(elem){
        let img= document.createElement("img")
        img.src= elem.urlToImage

        let Title= document.createElement("h3")
        Title.innerText= elem.title;

        let des= document.createElement("p")
        des.innerText= elem.description;

        let textdiv= document.createElement("div")
        textdiv.addEventListener("click", function(){
            newsData(elem);
        })
        textdiv.append(Title,des)

        let div= document.createElement("div");
        div.setAttribute("class","news")
        div.append(img,textdiv)


        container.append(div);
    });
}

let newsData= (elem)=>{
    localStorage.setItem("news", JSON.stringify(elem))
    window.location.href="./news.html"
}