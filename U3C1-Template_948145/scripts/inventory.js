product_arr= JSON.parse(localStorage.getItem("data")) || []

display(product_arr)

function display(product_arr){
    product_arr.forEach(function(elem, index){

        let childDiv= document.createElement("div");
        let productImage= document.createElement("img")
        productImage.setAttribute("src", elem.image);
        let productBrand= document.createElement("p")
        productBrand.innerText=elem.brand;
        let productName= document.createElement("p")
        productName.innerText=elem.name;
        let productPrice=document.createElement("p")
        productPrice.innerText=elem.price;
        let remove= document.createElement("button")
        remove.id="remove_product"
        remove.innerText="Remove"
        remove.addEventListener("click", function(){
            delete_product(index)
        })


        childDiv.append(productImage, productBrand, productName, productPrice, remove)
        document.querySelector("#products_data").append(childDiv)

    });
}

function delete_product(index){
    product_arr.splice(index,1)
    localStorage.setItem("data", JSON.stringify(product_arr));
    window.location.reload();
}