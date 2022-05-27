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
// BARRA DE MENU PARA DESKTOP
const closeDesk= document.getElementById("close-item-desk");
const contenedorDesk = document.getElementById("contenedor-header-nav-desktop")
const linkDesk = document.getElementById("producto-link");
linkDesk.addEventListener("click",()=>{
    if (contenedorDesk.clientWidth > 0) {
        
        contenedorDesk.style.display = "none"
    }else{
        contenedorDesk.style.display = "flex"

    }
    // menubtn.style.display = "block"

})

closeDesk.addEventListener("click",()=>{
    // e.preventDefault()
        contenedorDesk.style.display = "none" 
        // menubtn.style.display = "none"
   
})