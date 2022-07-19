// Objetivo, cargar un pedido de comida a partir de prompt
// Simula una carta de restaurant y el usuario va eligiendo por categoria
// Al final se mostrará el pedido con el total a pagar
import {
    cartaMenu
} from "./productos.js";

// Inicializo las variables a usar
/* const pedidoCliente = [];
let elPedido = "";
let pasada1 = 0;
let pasada2 = 0;
let pasada3 = 0;
let i = 0;
let entrada = ""; */

// Codigo javascript CARRITO INDEX

let carritoCompras = [];

export const carritoIndex = (productoId) => {
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductoCarrito = () => {

        // buscar el producto dentro de la lista de productos
        let producto = cartaMenu.find(cartaMenu => cartaMenu.id == productoId)

        // busco el producto en el carrito
        let buscoProdCarrito = carritoCompras.find(enCarrito => enCarrito.id == productoId)

        // si ya esta en el carrito, actualizo cantidad y html
        if (buscoProdCarrito != undefined) {

            buscoProdCarrito.cantidad++;

            let cantidadNueva = document.getElementById(`cantidad${cartaMenu.id}`);
            cantidadNueva.innerHTML = `<p id="cantidad${cartaMenu.id}">Cantidad: ${buscoProdCarrito.cantidad}</p>`;

        } else {

            // no esta en el carrito, lo creo
            carritoCompras.push(cartaMenu)

            cartaMenu.cantidad = 1

            let div = document.createElement('div')
            div.classList.add('productoEnCarrito')
            div.setAttribute("id",`divprodid${cartaMenu.id}`)
            div.innerHTML = `<p>${cartaMenu.nombre}</p>
                            <p>Precio: ${cartaMenu.precio}</p> 
                            <p id="cantidad${cartaMenu.id}">Cantidad: ${cartaMenu.cantidad}</p>
                            <button id="eliminar${cartaMenu.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>
                `
            contenedorCarrito.appendChild(div)

            // agrego evento para poder eliminar producto del carrito
            const boton = document.getElementById(`eliminar${cartaMenu.id}`)
            boton.addEventListener('click', () => {
                carritoDelete(cartaMenu.id)
            })

        }

        // calculo totales
        const precioPedido = carritoCompras.reduce((acumulador, precio) => acumulador + (precio.precio * precio.cantidad), 0)

        // actualizo total en el modal
        let totalPedido = document.getElementById("elTotal");
        totalPedido.innerHTML = `Total: $${precioPedido}`;

        // actualizo contador de cantidad en el header
        const cantidad = carritoCompras.reduce((acumulador, precio) => acumulador + (precio.cantidad), 0);
        let cantidadPedido = document.getElementById("contador-carrito");
        cantidadPedido.innerHTML = `${cantidad}`;
    }

    renderProductoCarrito();

}

export const carritoDelete = (productoId) => {

    // buscar el producto dentro de la lista de productos
    let producto = cartaMenu.find(cartaMenu => cartaMenu.id == productoId);

    // obtengo el id dentro del carrito
    let buscoProdCarrito = carritoCompras.find(enCarrito => enCarrito.id == productoId);

    // lo encontre
    if (buscoProdCarrito != undefined) {

        buscoProdCarrito.cantidad--;

        // si el total es cero debo eliminar el item
        if (buscoProdCarrito.cantidad == 0) {

            let divABorrar = document.getElementById(`divprodid${cartaMenu.id}`);
            divABorrar.remove();

        } else {

            // actualizo cantidad y html
            let cantidadNueva = document.getElementById(`cantidad${cartaMenu.id}`);
            cantidadNueva.innerHTML = `<p id="cantidad${cartaMenu.id}">Cantidad: ${buscoProdCarrito.cantidad}</p>`;

        }

        const precioPedido = carritoCompras.reduce((acumulador, precio) => acumulador + (precio.precio * precio.cantidad), 0)

        // actualizo total en el modal
        let totalPedido = document.getElementById("elTotal");
        totalPedido.innerHTML = `Total: $${precioPedido}`;

        // actualizo contador de cantidad en el header
        const cantidad = carritoCompras.reduce((acumulador, precio) => acumulador + (precio.cantidad), 0);
        let cantidadPedido = document.getElementById("contador-carrito");
        cantidadPedido.innerHTML = `${cantidad}`;

    }

}


/* 
entrada = prompt("Ingrese una de las siguientes opciones para realizar su pedido: \n1.- Visualizar la carta completa  \n2.- Elegir el Plato principal \n3.- Elegir la Bebida \n4.- Elegir el Postre \n5.- Confirmar el pedido");

while (entrada != "5") {
    if (parseInt(entrada) >= 1 && parseInt(entrada) <= 4) {
        switch (parseInt(entrada)) {
            case 1:
                
                // Muestra la carta completa al cliente con sus precios
                for (const carta of cartaMenu) {
                    if (carta.id == 1){
                        if (pasada1 == 0){
                            elPedido += "Plato Principal " + "\n";
                            elPedido += carta.nombre + " Precio: $ " + carta.precio + "\n";
                            pasada1=1;
                        }else{
                            elPedido += carta.nombre + " Precio: $ " + carta.precio + "\n";
                        }
                    }else{ 
                        if (carta.id == 2){
                            if (pasada2 == 0){
                                elPedido += "\n" + "Bebidas " + "\n";
                                elPedido += carta.nombre + " Precio: $ " + carta.precio + "\n";
                                pasada2=1;
                            }else{
                                elPedido += carta.nombre + " Precio: $ " + carta.precio + "\n";
                            }
                        }else{
                            if (pasada3 == 0){
                                elPedido += "\n" + "Postre " + "\n";
                                elPedido += carta.nombre + " Precio: $ " + carta.precio + "\n";
                                pasada3=1;
                            }else{
                                elPedido += carta.nombre + " Precio: $ " + carta.precio + "\n";
                            }
                        }

                    }                 

                }
                // Muestra la carta y vacío las variables para si vuelvo a entrar cargarlas nuevamente
                alert(elPedido);
                elPedido = "";
                pasada1 = 0;
                pasada2 = 0;
                pasada3 = 0;
                break;

            case 2:
                // Seleccion de la categoría 1 Plato Principal
                const platoFiltro = cartaMenu.filter((elPlato) => elPlato.id == 1);
            
                for (const platoPrincipal of platoFiltro){
                    elPedido += platoPrincipal.numero + ".- " + platoPrincipal.nombre + " - Precio: $ " + platoPrincipal.precio + "\n";
                }
                // Le pregunto al cliente que seleccione el plato y valido que la elección sea correcta
                let plato1 = prompt("Seleccione un plato de las siguientes opciones: \n" + elPedido);
                if (platoFiltro.some((el) => el.numero == parseInt(plato1))) {
                    
                    const ordena = platoFiltro.find((el) => el.numero == plato1 );
                    // Si es la primera vez lo cargo al pedido, sino le sumo solo la cantidad
                    if (ordena.cantidad == 0){
                        pedidoCliente.push(ordena);
                    }

                    for (const venta of platoFiltro) {
                        if(venta.numero == plato1){
                            venta.seleMenu()
                        }
                        
                    }
                }else{
                    // Sino encontro una opción correcta vuelve al menú anterior
                    alert("Ingresaste una opción fuera del rango solicitado!\n Intente nuevamente ! Usted Ingreso: " + plato1);
                    elPedido = "";
                    break;
                }
                
                elPedido = "";
                break;

            case 3:
                // Seleccion de la categoría 2 Bebidas
                const bebidaFiltro = cartaMenu.filter((laBebida) => laBebida.id == 2);

                for (const bebidaPrincipal of bebidaFiltro){
                    elPedido += bebidaPrincipal.numero + ".- " + bebidaPrincipal.nombre + " - Precio: $ " + bebidaPrincipal.precio + "\n";
                }
                // Le pregunto al cliente que seleccione el plato y valido que la elección sea correcta
                let bebida1 = prompt("Seleccione una Bebida de las siguientes opciones: \n" + elPedido);
                if (bebidaFiltro.some((el) => el.numero == parseInt(bebida1))) {

                    const ordena = bebidaFiltro.find((el) => el.numero == bebida1 );
                    // Si es la primera vez lo cargo al pedido, sino le sumo solo la cantidad
                    if (ordena.cantidad == 0){
                        pedidoCliente.push(ordena);
                    }

                    for (const venta of bebidaFiltro) {
                        if(venta.numero == bebida1){
                            venta.seleMenu()
                        }
                    }
                }else{
                    // Sino encontro una opción correcta vuelve al menú anterior
                    alert("Ingresaste una opción fuera del rango solicitado!\n Intente nuevamente ! Usted Ingreso: " + bebida1);
                    elPedido = "";
                    break;
                }

                elPedido = "";
                break;                

            case 4:
                // Seleccion de la categoría 3 Postre
                const postreFiltro = cartaMenu.filter((elPostre) => elPostre.id == 3);

                for (const postrePrincipal of postreFiltro){
                    elPedido += postrePrincipal.numero + ".- " + postrePrincipal.nombre + " - Precio: $ " + postrePrincipal.precio + "\n";
                }
                // Le pregunto al cliente que seleccione el plato y valido que la elección sea correcta
                let postre1 = prompt("Seleccione una Bebida de las siguientes opciones: \n" + elPedido);
                if (postreFiltro.some((el) => el.numero == parseInt(postre1))) {

                    const ordena = postreFiltro.find((el) => el.numero == postre1 );
                    // Si es la primera vez lo cargo al pedido, sino le sumo solo la cantidad
                    if (ordena.cantidad == 0){
                        pedidoCliente.push(ordena);
                    }

                    for (const venta of postreFiltro) {
                        if(venta.numero == postre1){
                            venta.seleMenu()
                        }
                    }
                }else{
                    // Sino encontro una opción correcta vuelve al menú anterior
                    alert("Ingresaste una opción fuera del rango solicitado!\n Intente nuevamente ! Usted Ingreso: " + postre1);
                    elPedido = "";
                    break;
                }
                elPedido = "";
                break;                
    
            default:
                break;
        }
    } else {
        // Sino encontro una opción correcta vuelve al menú anterior
        alert("Ingresaste una opción fuera del rango solicitado!. Ingreso: " + entrada);
    }
    // Vuelvo a preguntar las opciones hasta que finalice
    entrada = prompt("Ingrese una de las siguientes opciones para realizar su pedido: \n1.- Visualizar la carta completa  \n2.- Elegir el Plato principal \n3.- Elegir la Bebida \n4.- Elegir el Postre \n5.- Confirmar el pedido");

}

let saludoIni = document.getElementById("saludoIni");
saludoIni.innerHTML = "<h2> Su pedido es:</h2>";

let contenedor = document.getElementById("cartaMenu");
// Verifico que se haya seleccionado algo para calcular el pedido
if (pedidoCliente.length > 0){
    // Calculo el precio final
    const precioPedido = pedidoCliente.reduce( (acumulador, precio) => acumulador + (precio.precio * precio.cantidad), 0)
    for(finalPedido of pedidoCliente){
        elPedido += finalPedido.numero + ".- " + finalPedido.nombre + " - Cant.: " +  finalPedido.cantidad + "\n";
        let li = document.createElement("li");
        li.innerHTML = `<h3>  ${finalPedido.numero}.- ${finalPedido.nombre}  -  Cant.: ${finalPedido.cantidad}   </h3>`;
        contenedor.append(li);
    }
    // Informo el pedido realizado por el cliente
    alert("Su pedido es: \n" + elPedido + "\n" + "Total a pagar: $ " + precioPedido + "\n Muchas Gracias!");
    let li = document.createElement("li");
    li.innerHTML = `<h2>Total a Pagar: ${precioPedido}</h2>`;
    contenedor.append(li);

    let saludoFin = document.getElementById("saludoFin");
    saludoFin.innerHTML = "<h2> Disfrute de su pedido, Muchas Gracias!</h2>";

}else{

    alert("No selecciono nada de la carta, vuelva a intentar realizar su pedido. Muchas Gracias!");
    let li = document.createElement("li");
    li.innerHTML = `<h2> NO selecciono nada de la carta</h2>
                    <h3> Recargue la página y vuelva a intentar </h3>`;
    contenedor.append(li);

    let saludoFin = document.getElementById("saludoFin");
    saludoFin.innerHTML = "<h2> Hasta pronto, Muchas Gracias!</h2>";
}

 */