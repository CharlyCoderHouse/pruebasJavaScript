// Codigo para armar las Cards para el pedido

import {cartaMenu} from "./productos.js";
import {carritoIndex} from './carritoIndex.js';

const mostrarProductos = (cartaMenu) => {
    const contenedorPedido = document.getElementById('producto-contenedor');

    cartaMenu.forEach(cartaMenu => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src="${cartaMenu.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${cartaMenu.nombre}</h5>
                                <p class="card-text">Descripción:  ${cartaMenu.desc}</p>
                                <p class="card-text">Precio:$ ${cartaMenu.precio}</p>
                                <button class="btn btn-primary" id=boton${cartaMenu.id}>Comprar</button>
                            </div>
                        </div>`

        contenedorPedido.appendChild(div)

        const boton = document.getElementById(`boton${cartaMenu.id}`)
        boton.addEventListener('click', () => {
            carritoIndex(cartaMenu.id);

        })

    })

}

export function verificoStorage() {
    let listaProductos;
    let carritoStorage = JSON.parse(localStorage.getItem("carritoMenu"));
    
    if (carritoStorage) {
        listaProductos = carritoStorage;
    } else {
        listaProductos = [];
    }
    
    // pongo el contador en cero, por si no hay items en el carrito
    let cantidadPedido = document.getElementById("contador-carrito");
    let cantidad=0;
    cantidadPedido.innerHTML = `${cantidad}`;

    listaProductos.forEach(ele => {
        let i=0;
        for(i=0;i<ele.cantidad;i++){
        carritoIndex(ele.id);
        }
    })

}

mostrarProductos(cartaMenu);

verificoStorage();