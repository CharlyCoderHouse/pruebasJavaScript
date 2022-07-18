// Codigo javascript CARRITO INDEX

/* import {
    productos
} from "./stock.js";

let carritoCompras = [];

export const carritoIndex = (productoId) => {
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductoCarrito = () => {

        // buscar el producto dentro de la lista de productos
        let producto = productos.find(producto => producto.id == productoId)

        // busco el producto en el carrito
        let buscoProdCarrito = carritoCompras.find(enCarrito => enCarrito.id == productoId)

        // si ya esta en el carrito, actualizo cantidad y html
        if (buscoProdCarrito != undefined) {

            buscoProdCarrito.cantidad++;

            let cantidadNueva = document.getElementById(`cantidad${producto.id}`);
            cantidadNueva.innerHTML = `<p id="cantidad${producto.id}">Cantidad: ${buscoProdCarrito.cantidad}</p>`;

        } else {

            // no esta en el carrito, lo creo
            carritoCompras.push(producto)

            producto.cantidad = 1

            let div = document.createElement('div')
            div.classList.add('productoEnCarrito')
            div.setAttribute("id",`divprodid${producto.id}`)
            div.innerHTML = `<p>${producto.nombre}</p>
                            <p>Precio: ${producto.precio}</p> 
                            <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                            <button id="eliminar${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>
                `
            contenedorCarrito.appendChild(div)

            // agrego evento para poder eliminar producto del carrito
            const boton = document.getElementById(`eliminar${producto.id}`)
            boton.addEventListener('click', () => {
                carritoDelete(producto.id)
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
    let producto = productos.find(producto => producto.id == productoId);

    // obtengo el id dentro del carrito
    let buscoProdCarrito = carritoCompras.find(enCarrito => enCarrito.id == productoId);

    // lo encontre
    if (buscoProdCarrito != undefined) {

        buscoProdCarrito.cantidad--;

        // si el total es cero debo eliminar el item
        if (buscoProdCarrito.cantidad == 0) {

            let divABorrar = document.getElementById(`divprodid${producto.id}`);
            divABorrar.remove();

        } else {

            // actualizo cantidad y html
            let cantidadNueva = document.getElementById(`cantidad${producto.id}`);
            cantidadNueva.innerHTML = `<p id="cantidad${producto.id}">Cantidad: ${buscoProdCarrito.cantidad}</p>`;

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

} */

// Codigo javascript APP.JS
/* 
import {
    productos
} from './stock.js'
import {
    carritoIndex
} from './carritoIndex.js';

const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById('producto-contenedor');

    productos.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción:  ${producto.desc}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                            </div>
                        </div>`

        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`boton${producto.id}`)
        boton.addEventListener('click', () => {
            carritoIndex(producto.id);
           // alert(`Se agrego ${producto.nombre}`);

        })

    })

}


mostrarProductos(productos) */

// Codigo javascript MODAL.JS

/* const modalContenedor = document.querySelector('.modal-container');

const abrirCarrito = document.getElementById('open')

const cerrarCarrito = document.getElementById('cerrar')

const modalCarrito = document.querySelector('.modal-carrito')



// CLICK PARA ABRIR EL CARRITO - EN EL HEADER
abrirCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.toggle('modal-active')
})

// CLICK BOTON CERRAR EN EL CARRITO - EN EL MODAL
cerrarCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.remove('modal-active')
})

// CLICK FUERA DEL MODAL PARA CERRAR MODAL
modalContenedor.addEventListener('click',() =>{
    cerrarCarrito.click();
})

modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation();
}) */

// Codigo javascript STOCK.JS

// CLASE PARA DEFINIR LOS PRODUCTOS
/* class NewProductos{
    constructor(id, nombre, desc, precio, img, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.desc = desc;
        this.precio = precio;
        this.img = img
        this.cantidad = cantidad;
        this.disponible = false;
    }
    
    disponibleSi() {
        this.disponible=true;
    }

}

// CREO LOS PRODUCTOS
const productos = [];
productos.push(new NewProductos(1,"Lampara Colgante", "Lampara de pared, madera de eucalipto, foco vintage.", 4500, "src/img/carrito01.jpeg",10));
productos.push(new NewProductos(2,"Soporte Bicicleta", "Encastre metalico en eje rueda delantera", 6500, "src/img/carrito02.jpeg",10));
productos.push(new NewProductos(3,"Escritorio Revatible", "Estructura metalica, tapa de paraiso.", 8000, "src/img/carrito03.jpeg",10));
productos.push(new NewProductos(4,"Tablas para Picada", "Madera de eucalipto. Incluye cera para mantenimiento.", 3000, "src/img/carrito04.jpeg",10));
productos.push(new NewProductos(5,"Perchero de Pared", "Madera de eucalipto laqueada con perchas aluminio mate.", 5000, "src/img/carrito05.jpeg",10));
productos.push(new NewProductos(6,"Lampara Hexagonal", "Lampara de mesa, madera de eucalipto, con foco vintage.", 7000, "src/img/carrito06.jpeg",10));

export { productos }; */