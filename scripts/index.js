//store the products array in localstorage as "products"
let form = document.getElementById("add_product")
form.addEventListener("click", product)

let arr  = JSON.parse(localStorage.getItem("products")) || []
function product(){
event.preventDefault();

  let p= new Nest()
  arr.push(p)
  localStorage.setItem("products",JSON.stringify(arr))

  document.querySelector("#products").reset();
  
}

function Nest(){
   this.type = products.type.value;
   this.desc = products.desc.value;
   this.price = products.price.value;
   this.image = products.image.value;
}

