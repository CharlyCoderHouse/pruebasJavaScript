// Vamos a solicitar que se ingrese opciones para realizar calculos a partir de opciones

//Funcion 1 para el IVA
function calculoIva(costo) {
    return (costo * 0.21)
}

//Funcion 2 para calcular margenes
function calculoMargen(costo1, margen) {
    return (costo1 * margen / 100)
}

alert("Bienvenidos");

let entrada = prompt("Ingrese una de las siguientes opciones: 1.- Calcular el IVA de un Producto    2.- Calcular el margen de un producto con IVA incluido     3.- Terminar ");

while (entrada != "3") {
    if (parseInt(entrada) >= 1 && parseInt(entrada) <= 3) {
        switch (parseInt(entrada)) {
            case 1:
                let costo = prompt("Ingrese el precio para calcular el IVA");
                if (!isNaN(costo) && costo != null && costo != " ") {
                    let precioIva = parseFloat(calculoIva(costo));
                    let ivaP = parseInt(costo) + precioIva;
                    alert("El Precio con IVA del producto: es $ " + ivaP);
                    break;
                } else {
                    alert("No ingreso un número, por favor comience de nuevo");
                    continue;
                }

                case 2:
                    let costo1 = prompt("Ingrese el costo del producto para calcular el margen");
                    if (!isNaN(costo1) && costo1 != null && costo1 != " ") {
                        let margen = prompt("Ingrese el margen de ganancia para calcular ");
                        if (!isNaN(margen) && margen != null && margen != "") {
                            let precioMargen = parseInt(costo1) + parseFloat(calculoMargen(costo1, margen));
                            let precioFinal = precioMargen + parseFloat(calculoIva(precioMargen));
                            alert("El Precio con margen de ganancia del producto: es $ " + precioMargen);
                            alert("El Precio Final con IVA del producto: es $ " + precioFinal);
                            break;
                        } else {
                            alert("No ingreso un número, por favor comience de nuevo");
                            continue;
                        }
                    } else {
                        alert("No ingreso un número, por favor comience de nuevo");
                        continue;
                    }

                    default:
                        break;
        }
    } else {
        alert("Ingresaste una opción fuera del rango solicitado!. Ingreso: " + entrada);
    }

    entrada = prompt("Ingrese una de las siguientes opciones: 1.- Calcular el IVA de un Producto    2.- Calcular el margen de un producto con IVA incluido     3.- Terminar ");

}