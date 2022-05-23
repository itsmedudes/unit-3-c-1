var arr = JSON.parse(localStorage.getItem("products"))

arr.forEach(function(ele,index){
   
   let parent = document.createElement("div")
   parent.id ="seconddiv"

   let type = document.createElement("h2")
   type.innerText= ele.type
   
   let desc = document.createElement("p")
   desc.innerText=ele.desc
   
   let price = document.createElement("h3")
   price.innerText = `₹${ele.price}`

   

   let image = document.createElement("img")
   image.className = "images"
   image.setAttribute("src",ele.image)

   let remove = document.createElement("button")
   remove.innerText = "Remove"
   remove.id = "remove_product"
   remove.addEventListener("click",function(){
             removes(index)
   })
    
  parent.append(image,type,desc,price,remove)


   
all_products.append(parent)

})

function removes(index){
   arr.splice(index,1)
   localStorage.setItem("products",JSON.stringify(arr))
   window.location.reload();
}