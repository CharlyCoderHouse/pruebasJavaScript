// CLASE PARA DEFINIR LOS PRODUCTOS PARA EL PEDIDO
class Menu {
    constructor(id, nombre, precio, numero, cantidad, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.numero = numero;
        this.cantidad = cantidad;
        this.pedido = false;      
        this.img = img; 
    }
    seleMenu(){
        this.cantidad = this.cantidad + 1;
        this.pedido = true;       
    }
}

// Inicializo el menú de la carta 
const cartaMenu = [];
cartaMenu.push(new Menu(1, "Ñoquis a la Bolognesa", 1200, 1, 0));
cartaMenu.push(new Menu(1, "Matambre al Verdeo", 2500, 2, 0));
cartaMenu.push(new Menu(1, "Bife de Chorizo con papas españolas", 3500, 3, 0));
cartaMenu.push(new Menu(2, "Gaseosa", 500, 4, 0));
cartaMenu.push(new Menu(2, "Cerveza", 700, 5, 0));
cartaMenu.push(new Menu(2, "Vino", 900, 6, 0));
cartaMenu.push(new Menu(3, "Helado", 480, 7, 0));
cartaMenu.push(new Menu(3, "Flan con dulce", 350, 8, 0));
cartaMenu.push(new Menu(3, "Ensalada de Frutas", 500, 9, 0));

export { cartaMenu };