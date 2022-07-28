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
cartaMenu.push(new Menu(1, "Ñoquis a la Bolognesa", 1200, 1, 0, "img/noquispapa.jpg", "Ñoquis de papa con salsa de tomate, especias y carne"));
cartaMenu.push(new Menu(2, "Matambre al Verdeo", 2500, 1, 0, "img/matambre_verdeo.jpg", "Matambre de cerdo con crema y cebolla de verdeo (con guarnición)"));
cartaMenu.push(new Menu(3, "Bife de Chorizo con papas españolas", 3500, 1, 0, "img/bife_chorizo.jpg", "Bife de chorizo con cocción a gusto (con guarnición)"));
cartaMenu.push(new Menu(4, "Gaseosa", 500, 2, 0, "img/gaseosa.jpg", "Gaseosas línea Coca-Cola"));
cartaMenu.push(new Menu(5, "Cerveza", 700, 2, 0, "img/cervezas.jpg", "Cerveza Tirada Patagonia"));
cartaMenu.push(new Menu(6, "Vino", 900, 2, 0, "img/Colon.jpg", "Vinos línea Colon"));
cartaMenu.push(new Menu(7, "Helado", 480, 3, 0, "img/Helado.jpg", "Dos Bochas de Helado a elección"));
cartaMenu.push(new Menu(8, "Flan con dulce", 350, 3, 0, "img/flan_dulce.png", "Flan con Dulce de leche o Crema"));
cartaMenu.push(new Menu(9, "Ensalada de Frutas", 500, 3, 0, "img/fruta.jpg", "Frutas de estación con crema opcional"));

export { cartaMenu };