let boton = document.getElementById("hamburguesa");

boton.addEventListener("click", esconderMostrar);


function esconderMostrar() {
    let element = document.querySelector(".links");
    element.classList.toggle("links-show");
}
















// let boton = document.getElementById("hamburguesa");
// boton.addEventListener("click", esconderMostrar);

// function esconderMostrar(){
//     let menu = document.querySelector(".links");
    
//     if (menu.classList.contains("links-show")){
//         menu.classList.remove("links-show");
//     } else{
//     menu.classList.add("links-show");}
// }