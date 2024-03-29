import {
    verificoStorage
  } from "./app.js";
  import {
    mostrarProductos
  } from "./app.js";

// CLASE PARA DEFINIR LOS PRODUCTOS PARA EL PEDIDO
class Menu {
    constructor(id, nombre, precio, numero, cantidad, img, desc) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.numero = numero;
        this.cantidad = cantidad;
        this.pedido = false;
        this.img = img;
        this.desc = desc;
    }
    seleMenu() {
        this.cantidad = this.cantidad + 1;
        this.pedido = true;
    }

}

// Inicializo el menú de la carta 
const cartaMenu = [];

const cargar = async () => {
    try {
        const response = await fetch('productClase.json')
        const cartas = await response.json();
      
        cartas.forEach(carta => {
            cartaMenu.push(
                new Menu(carta.id, 
                         carta.nombre, 
                         carta.precio, 
                         carta.numero, 
                         carta.cantidad, 
                         carta.img, 
                         carta.desc));
        });

        mostrarProductos(cartaMenu);
        verificoStorage();
    
      } catch (error) {
        console.log("error:"+error);
      }

  };
  
// OBTENGO LOS PRODUCTOS CON LA FUNCION  
cargar();

export { cartaMenu };