function esconderMostrar(){
    document.querySelector(".links").classList.toggle("links-show");
}

let boton = document.getElementById("hamburguesa");
boton.addEventListener("click", esconderMostrar);