//CALCULADORA DE EDAD//

//Primer pasito instalamos: npm i moment

const moment = require("moment");

//Debe contar con una variable que almacene la fecha actual (urilizar moment())

const fechaActual = moment();

//Debe contar con una variable que almacene la fecha ad tu nacimiento (urilizar moment())

const fechaNacimiento = moment("1995-04-06");

//Validar con un if que la variable contenga una fecha válida (utilizar el método isValid())

if (fechaNacimiento.isValid()) {
  //Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. (utilizar el étodo diff())

  let diasPasados = fechaActual.diff(fechaNacimiento, "days");
  console.log(
    `Pasaron desde que nací hasta hoy: ${diasPasados}, estamnos viejos`
  );
} else {
  console.log("La fecha no es valida");
}
