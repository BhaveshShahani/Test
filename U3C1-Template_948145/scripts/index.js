//store the products array in localstorage as "data"

function item(b,n,p,i){
 this.brand=b;
 this.name=n;
 this.price=p;
 this.image=i;
}

function addedProduct(e){
    product_arr= JSON.parse(localStorage.getItem("data")) || []

    e.preventDefault();
    
    let form=document.querySelector("#product_form");
    let brand= form.product_brand.value;
    let name= form.product_name.value;
    let price= form.product_price.value;
    let image= form.product_image.value;

    let product1= new item(brand,name,price,image);

    product_arr.push(product1);

    localStorage.setItem("data", JSON.stringify(product_arr));

    window.location.reload();
}