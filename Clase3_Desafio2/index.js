/* 
en este FOR deberias ingresar los nombres de 4 alumnos
y no numere el 3 que esta reservado
*/


for (let i=1; i<=5; i++){

    if (i==3){
      continue;
    }
  
    let ingresarAlumno = prompt("Ingrese nombre del alumno "+i+" : ");
  
    alert("Ingreso el alumno número: "+i+" Nombre: "+ingresarAlumno);
  
  }