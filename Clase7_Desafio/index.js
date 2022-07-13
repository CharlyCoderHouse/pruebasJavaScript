// Se le muestra al cliente una lista de productos con sus precios
// de los cuales debe ingresar el porcentaje de IVA de cada uno. 
// Al final se mostrará la lista de artículos con la información completa

class Menu {
    constructor(id, nombre, precio, numero) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.numero = numero;
        this.pedido = false;
        this.cantidad = 0;
    }
    seleMenu(){
        this.pedido = true;
        this.cantidad = this.cantidad + 1;
    }
}
const cartaMenu = [];
cartaMenu.push(new Menu(1, "Ñoquis a la Bolognesa", 1200, 1));
cartaMenu.push(new Menu(1, "Matambre al Verdeo", 2500, 2));
cartaMenu.push(new Menu(1, "Bife de Chorizo con papas españolas", 3500, 3));
cartaMenu.push(new Menu(2, "Gaseosa", 500, 4));
cartaMenu.push(new Menu(2, "Cerveza", 700, 5));
cartaMenu.push(new Menu(2, "Vino", 900, 6));
cartaMenu.push(new Menu(3, "Helado", 480, 7));
cartaMenu.push(new Menu(3, "Flan con dulce", 350, 8));
cartaMenu.push(new Menu(3, "Ensalada de Frutas", 500, 9));


const pedidoCliente = [];
let elPedido = "";
let pasada1 = 0;
let pasada2 = 0;
let pasada3 = 0;
let i = 0;
let entrada = "";

alert("Bienvenidos a la Carta del Menú para su cena");
entrada = prompt("Ingrese una de las siguientes opciones para realizar su pedido: \n1.- Visualizar la carta completa  \n2.- Elegir el Plato principal \n3.- Elegir la Bebida \n4.- Elegir el Postre \n5.- Confirmar el pedido");

while (entrada != "5") {
    if (parseInt(entrada) >= 1 && parseInt(entrada) <= 4) {
        switch (parseInt(entrada)) {
            case 1:
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
                alert(elPedido);
                elPedido = "";
                pasada1 = 0;
                pasada2 = 0;
                pasada3 = 0;
                break;

            case 2:
                const platoFiltro = cartaMenu.filter((elPlato) => elPlato.id == 1);
                for (const platoPrincipal of platoFiltro){
                    elPedido += platoPrincipal.numero + ".- " + platoPrincipal.nombre + " - Precio: $ " + platoPrincipal.precio + "\n";
                }
                let plato1 = prompt("Seleccione un plato de las siguientes opciones: \n" + elPedido);
                if (platoFiltro.some((el) => el.numero == parseInt(plato1))) {
                    const ordena = platoFiltro.find((el) => el.numero == plato1 );
                    pedidoCliente.push(ordena);
                    for (const venta of platoFiltro) {
                        if(venta.numero == plato1){
                            venta.seleMenu()
                        }
                    }
                }else{
                    alert("Ingresaste una opción fuera del rango solicitado!\n Intente nuevamente !. Usted Ingreso: " + plato1);
                    elPedido = "";
                    break;
                }
                elPedido = "";
                break;

            case 3:
                const bebidaFiltro = cartaMenu.filter((laBebida) => laBebida.id == 2);
                for (const bebidaPrincipal of bebidaFiltro){
                    elPedido += bebidaPrincipal.numero + ".- " + bebidaPrincipal.nombre + " - Precio: $ " + bebidaPrincipal.precio + "\n";
                }
                let bebida1 = prompt("Seleccione una Bebida de las siguientes opciones: \n" + elPedido);
                if (bebidaFiltro.some((el) => el.numero == parseInt(bebida1))) {
                    const ordena = bebidaFiltro.find((el) => el.numero == bebida1 );
                    pedidoCliente.push(ordena);
                    for (const venta of bebidaFiltro) {
                        if(venta.numero == bebida1){
                            venta.seleMenu()
                        }
                    }
                }else{
                    alert("Ingresaste una opción fuera del rango solicitado!\n Intente nuevamente ! Usted Ingreso: " + bebida1);
                    elPedido = "";
                    break;
                }
                elPedido = "";
                break;                

            case 4:
                const postreFiltro = cartaMenu.filter((elPostre) => elPostre.id == 3);
                for (const postrePrincipal of postreFiltro){
                    elPedido += postrePrincipal.numero + ".- " + postrePrincipal.nombre + " - Precio: $ " + postrePrincipal.precio + "\n";
                }
                let postre1 = prompt("Seleccione una Bebida de las siguientes opciones: \n" + elPedido);
                if (postreFiltro.some((el) => el.numero == parseInt(postre1))) {
                    const ordena = postreFiltro.find((el) => el.numero == postre1 );
                    pedidoCliente.push(ordena);
                    for (const venta of postreFiltro) {
                        if(venta.numero == postre1){
                            venta.seleMenu()
                        }
                    }
                }else{
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
        alert("Ingresaste una opción fuera del rango solicitado!. Ingreso: " + entrada);
    }

    entrada = prompt("Ingrese una de las siguientes opciones para realizar su pedido: \n1.- Visualizar la carta completa  \n2.- Elegir el Plato principal \n3.- Elegir la Bebida \n4.- Elegir el Postre \n5.- Confirmar el pedido");

}

const precioPedido = pedidoCliente.reduce( (acumulador, precio) => acumulador + precio.precio, 0)
for(finalPedido of pedidoCliente){
    elPedido += finalPedido.numero + ".- " + finalPedido.nombre + "\n";
}
alert("Su pedido es: \n" + elPedido + "\n" + "Total a pagar: $ " + precioPedido + "\n Muchas Gracias!");