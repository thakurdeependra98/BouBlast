 var men = document.querySelector("#brand h3")
 var b = document.querySelector("#menu")
 var c = document.querySelector("#menu h1")

 men.addEventListener("click",function(){
    b.style.top=0
 })
 c.addEventListener("click", function(){
   b.style.top="-100%"
 })

 