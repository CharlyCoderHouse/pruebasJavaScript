// Importo el objeto que tiene los productos para el pedido
import {cartaMenu} from "./productos.js";

let carritoCompras = [];

export const carritoIndex = (productoId) => {
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductoCarrito = () => {

        // buscar el producto dentro de la lista de productos
        let platoFiltro = cartaMenu.find(platoFiltro => platoFiltro.id == productoId)

        // busco el producto en el carrito
        let buscoProdCarrito = carritoCompras.find(enCarrito => enCarrito.id == productoId)

        // si ya esta en el carrito, actualizo cantidad y html
        if (buscoProdCarrito != undefined) {

            buscoProdCarrito.cantidad++;

            let cantidadNueva = document.getElementById(`cantidad${platoFiltro.id}`);
            cantidadNueva.innerHTML = `<p id="cantidad${platoFiltro.id}">Cantidad: ${buscoProdCarrito.cantidad}</p>`;

        } else {

            // no esta en el carrito, lo creo
            carritoCompras.push(platoFiltro)

            platoFiltro.cantidad = 1

            let div = document.createElement('div')
            div.classList.add('productoEnCarrito')
            div.setAttribute("id", `divprodid${platoFiltro.id}`)
            div.innerHTML = `<p>${platoFiltro.nombre}</p>
                            <p>Precio: ${platoFiltro.precio}</p> 
                            <p id="cantidad${platoFiltro.id}">Cantidad: ${platoFiltro.cantidad}</p>
                            <button id="eliminar${platoFiltro.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>
                `
            contenedorCarrito.appendChild(div)

            // agrego evento para poder eliminar producto del carrito
            const boton = document.getElementById(`eliminar${platoFiltro.id}`)
            boton.addEventListener('click', () => {
                carritoDelete(platoFiltro.id)
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

        // actualizo sessiom storage
        localStorage.setItem("carritoMenu", JSON.stringify(carritoCompras));

    }

    renderProductoCarrito();

}

export const carritoDelete = (productoId) => {

    // buscar el producto dentro de la lista de productos
    let platoFiltro = cartaMenu.find(platoFiltro => platoFiltro.id == productoId);

    // obtengo el id dentro del carrito
    let buscoProdCarrito = carritoCompras.find(enCarrito => enCarrito.id == productoId);

    // lo encontre
    if (buscoProdCarrito != undefined) {

        buscoProdCarrito.cantidad--;

        // si el total es cero debo eliminar el item
        if (buscoProdCarrito.cantidad == 0) {

            let divABorrar = document.getElementById(`divprodid${platoFiltro.id}`);
            divABorrar.remove();

        } else {

            // actualizo cantidad y html
            let cantidadNueva = document.getElementById(`cantidad${platoFiltro.id}`);
            cantidadNueva.innerHTML = `<p id="cantidad${platoFiltro.id}">Cantidad: ${buscoProdCarrito.cantidad}</p>`;

        }

        const precioPedido = carritoCompras.reduce((acumulador, precio) => acumulador + (precio.precio * precio.cantidad), 0)

        // actualizo total en el modal
        let totalPedido = document.getElementById("elTotal");
        totalPedido.innerHTML = `Total: $${precioPedido}`;

        // actualizo contador de cantidad en el header
        const cantidad = carritoCompras.reduce((acumulador, precio) => acumulador + (precio.cantidad), 0);
        let cantidadPedido = document.getElementById("contador-carrito");
        cantidadPedido.innerHTML = `${cantidad}`;

        // actualizo local storage
        localStorage.removeItem("carritoMenu");
        localStorage.setItem("carritoMenu", JSON.stringify(carritoCompras));

    }

}

export const carritoVaciar = ()=> {
    carritoCompras = [];
}