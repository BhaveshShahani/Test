let product=JSON.parse(localStorage.getItem("cart_items"))||[]
let wallet=JSON.parse(localStorage.getItem("wallet"))
let dw=document.getElementById("wallet")
dw.innerText=wallet;

display(product)

function display(product){
    product.forEach(function(elem,index){
        let container= document.getElementById("cart")

        let img=document.createElement("img")
        img.src=elem.image
        let name= document.createElement("p")
        name.innerText=elem.name
        let price= document.createElement("p")
        price.innerText=elem.price;
        let button=document.createElement("button")
        button.innerText="Remove"
        button.setAttribute("class", "remove")
        button.addEventListener("click", function(){
            remove(index,elem);
        })
        let div=document.createElement("div")
        div.append(img,name,price,button);
        container.append(div);
    });
}


function remove(index,elem){
    product.splice(index,1)
    localStorage.setItem("cart_items",JSON.stringify(product))
    let wallet=JSON.parse(localStorage.getItem("wallet"))
    let dw=document.getElementById("wallet")
    wallet= wallet+elem.price;
    dw.innerText=wallet
    localStorage.setItem("wallet",JSON.stringify(wallet))
    window.location.reload();
}
