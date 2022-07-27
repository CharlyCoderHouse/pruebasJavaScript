// INDEX comienzo del código JavaScript

let bienvenida = document.getElementById("titulo");
bienvenida.innerHTML = "<h1>Bienvenido a Comida como en Casa </h1>";

let saludoIni = document.getElementById("saludoIni");
saludoIni.innerHTML = "<h2>Elija cada producto para completar el pedido</h2>";

let usuarioStorage = localStorage.getItem("usuario");

if (usuarioStorage){
    let pUser = document.getElementById('textUser')
    pUser.innerHTML = `<h3>Bienvenid@ ${usuarioStorage}</h3>`

    let botonUser = document.getElementById('incioBoton')
    
    botonUser.innerHTML = `<button type="button" class="btn btn-warning" data-bs-toggle="modal" id="cierreUser">
    Cerrar Sesión <i class="fa-solid fa-arrow-right-from-bracket"></i></button>`
}else {
    let botonUser = document.getElementById('incioBoton')
    botonUser.innerHTML = `<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Inicie Sesión <i class="fa-solid fa-person-arrow-down-to-line"></i></button>`
}