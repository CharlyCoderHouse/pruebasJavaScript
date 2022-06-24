/* JavaScript */
/* 
Solicitar un numero entre 1 y 10
Para terminar se debe ingresar la palabra fin
Si ingresas  20 te da una alerta
Si ingresas  80 te da una alerta por default es menor a 100 
*/

alert("Para terminar debe ingresar la palabra fin");

let entrada = prompt("Ingrese un numero entre el 1 al 100: ").toLowerCase();

while (entrada != "fin") {
  if (parseInt(entrada) >= 1 && parseInt(entrada) <= 100) {
    switch (parseInt(entrada)) {
      case 20:
        alert(`Ingresaste el número ${entrada}`);
        break;
      case 80:
        alert(`Ingresaste el número ${entrada}`);
        break;
      default:
        alert(`Ingresaste el número ${entrada} que es menor a 100`);
        break;
    }
  } else {
    alert("Ingresaste un numero fuera del rango solicitado!. Ingreso: " + entrada);
  }

  entrada = prompt("Ingrese un numero del 1 al 100: ").toLowerCase();
}

