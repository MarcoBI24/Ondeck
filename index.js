// BARRA DE MENU PARA MOBILE
const menubtn = document.getElementById("menu");
const contenedor = document.getElementById("contenedor-nav")
const closebtn = document.getElementById("close");
closebtn.addEventListener("click",()=>{
    contenedor.style.display = "none"
    menubtn.style.display = "block"

})

menubtn.addEventListener("click",()=>{
    // e.preventDefault()
        contenedor.style.display = "flex" 
        menubtn.style.display = "none"
   
})