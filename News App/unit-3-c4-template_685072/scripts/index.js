// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

document.getElementById("search_input").addEventListener("click", function(){
    window.location.href="./search.html";
})
let getData= async (clicked_id) =>{
   
    const url= `https://masai-api.herokuapp.com/news/top-headlines?country=${clicked_id}`

    let res= await fetch(url)
    let data= await res.json()

    console.log(data.articles);
    append(data.articles)

}

let append= (data) =>{
    let container= document.getElementById("results");
    container.innerHTML=null;

    data.forEach(({urlToImage,title,description}) => {
        let img= document.createElement("img")
        img.src= urlToImage

        let Title= document.createElement("h3")
        Title.innerText= title;

        let des= document.createElement("p")
        des.innerText= description;

        let textdiv= document.createElement("div")
        textdiv.append(Title,des)

        let div= document.createElement("div");
        div.setAttribute("class","news")
        div.append(img,textdiv)


        container.append(div);
    });
}

 export default getData;