

let  search = async ()=>{
    let query= document.getElementById("query").value;
    let data= await getData(query)
    append(data)
    console.log(data)
}

let getData= async (query) =>{
    let url= `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`

        let res= await fetch(url)
        let data = await res.json();
        return data.hotels
}

let append= (data) =>{
    let container = document.getElementById("hotels-list");
    container.innerHTML=null;

    data.forEach((elem) => {
        let img= document.createElement("img")
        img.src= elem.Images.one;
        let name= document.createElement("p")
        name.innerText= elem.Title;
        let price= document.createElement("p")
        price.innerText=elem.Price;
        let Ac= document.createElement("p")
        Ac.innerText=elem.Ac;
        let rating= document.createElement("p")
        rating.innerText=elem.Rating;
        let button= document.createElement("button")
        button.setAttribute("class", "book")
        button.innerText="BOOK NOW"
        button.addEventListener("click", function(){
            addtocart(elem)
        })
        
        let div= document.createElement("div")
        div.setAttribute("id", "hotel")
        div.append(img,name,price,Ac,rating,button)

        container.append(div)
    });
}

function addtocart(elem){
    localStorage.setItem("hotels", JSON.stringify(elem))
    location.href="checkout.html"
}