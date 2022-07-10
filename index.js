// Se le muestra al cliente una lista de productos con sus precios
// de los cuales debe ingresar el porcentaje de IVA de cada uno. 
// Al final se mostrará la lista de artículos con la información completa

class Producto {
    constructor(nombre, precio, iva, precioTotal) {
        this.nombre = nombre;
        this.precio = precio;
        this.iva = iva;
        this.precioTotal = precioTotal;
    }
}
const productos = [];
productos.push(new Producto("Remera", 1200 , 0, 0));
productos.push(new Producto("Buzo", 2500 , 0, 0));
productos.push(new Producto("Pantalon", 4500 , 0, 0));
productos.push(new Producto("Calza", 2250 , 0, 0));
productos.push(new Producto("Gorra", 680 , 0, 0));

    
//Funcion 1 para el IVA
function calculoIva(costo, vIva) {
    return (costo + (costo * vIva /100))
}

alert("Bienvenidos a la Configuración de su Tienda");

let entrada = prompt("Ingrese una de las siguientes opciones para configurar los Productos: \n1.- Ingresar el IVA de cada Producto  \n2.- Listar los productos \n3.- Terminar ");
let losProductos="";

while (entrada != "3") {
    if (parseInt(entrada) >= 1 && parseInt(entrada) <= 3) {
        switch (parseInt(entrada)) {
            case 1:
                for (const produ of productos){
                    let ivaIng = parseFloat(prompt("Ingrese el valor del IVA para el producto " + produ.nombre));
                    if (!isNaN(ivaIng)){ 
                        produ.iva = ivaIng;
                        produ.precioTotal = calculoIva(produ.precio,ivaIng);
                    }else{
                        let ivaIng = parseFloat(prompt("No ingreso un número\n Por favor Ingrese el valor del IVA para el producto " + produ.nombre));
                    }
                } 
                break;
            case 2:
                for (const produ of productos){
                    losProductos= losProductos + "Producto: " + produ.nombre + " Precio: $ " + produ.precio + " IVA %: " + produ.iva + " Precio Venta: $ " + produ.precioTotal + "\n" + "\n";
                }
                alert(losProductos);
                losProductos="";
                break;
            default:
                break;
        }
    } else {
        alert("Ingresaste una opción fuera del rango solicitado!. Ingreso: " + entrada);
    }

    entrada = prompt("Ingrese una de las siguientes opciones: \n1.- Ingresar el IVA de cada Producto  \n2.- Listar los productos \n3.- Terminar ");

}  

