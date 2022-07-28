
let hotel= JSON.parse(localStorage.getItem("hotels")) || []

displayHotels(hotel)


function displayHotels(hotel){
    
    hotel.forEach(function(ele) {

        let container= document.getElementById("hotel_details")

        let img= document.createElement("img")
        img.src= ele.Images.one;
        let name= document.createElement("p")
        name.innerText= elem.Title;
        let price= document.createElement("p")
        price.innerText=elem.Price;
        let Ac= document.createElement("p")
        Ac.innerText=elem.Ac;
        let rating= document.createElement("p")
        rating.innerText=elem.Rating;

        let div=document.createElement("div")

        div.append(img,name,price,Ac,rating)
        container.append(div)
    });
}

function book(){
    let username= document.getElementById("user_name").value;
   setInterval(function(){
       alert(`${username},Your booking is successful!`)
   },5000)
}


