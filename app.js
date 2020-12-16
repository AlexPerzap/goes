let boton = document.getElementById("hamburguesa");

boton.addEventListener("click", esconderMostrar);


function esconderMostrar() {
    let element = document.querySelector(".links");
    element.classList.toggle("links-show");
}


/*Botón responsive mostrar overlay */
let botonResp = document.getElementById("hamburguesa-resp");

botonResp.addEventListener("click", mostrarOverlay);

function mostrarOverlay(){
    document.getElementById("myNav").style.height = "100%";
}

/*Botón responsive cerrar overlay */
let botonRespCerr = document.getElementById("closebtn");

botonRespCerr.addEventListener("click", cerrarOverlay);

function cerrarOverlay(){
    document.getElementById("myNav").style.height = "0%";
}