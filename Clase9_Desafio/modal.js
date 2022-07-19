// Codigo javascript MODAL.JS

const modalContenedor = document.querySelector('.modal-container');

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
})
