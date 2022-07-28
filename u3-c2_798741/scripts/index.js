async function getdata(){
    let url='https://grocery-masai.herokuapp.com/items'

    try{
        let res= await fetch(url)
        let Data=await res.json()
        console.log(Data)
        append(Data.data)
    }catch(err){
        console.log(err)
    }
}
getdata();


function append(data){
    
    let container= document.getElementById("groceries")
    localStorage.setItem("wallet", JSON.stringify(700))

    data.forEach(function(elem){
        let img= document.createElement("img")
        img.src= elem.image;
        let name= document.createElement("p")
        name.innerText=elem.name
        let price= document.createElement("p")
        price.innerText=elem.price;
        let button=document.createElement("button")
        button.innerText="Add to Cart"
        button.setAttribute("class", 'add_to_cart')
        button.addEventListener("click", function(){
            addtoCart(elem);
        })
        let div=document.createElement("div")
        div.append(img,name,price,button);
        container.append(div);
    });

    
}

function addtoCart(elem){   
 localStorage.setItem("wallet", JSON.stringify(700))
 let arr=JSON.parse(localStorage.getItem("product"))||[]
 arr.push(elem);
 let product=localStorage.setItem("cart_items", JSON.stringify(arr));
 let wallet=JSON.parse(localStorage.getItem("wallet"))
 wallet= wallet-(elem.price)
 let displaywallet= document.getElementById("wallet")
 displaywallet.innerText=wallet;
 localStorage.setItem("wallet", JSON.stringify(wallet))
   } 




