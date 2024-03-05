//Declaro mis funciones:

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multi = (a, b) => a * b;
const division = (a, b) => a / b;

//Dos formas de importar y exportar modules:

//Common JS

module.exports = {
  suma,
  resta,
  multi,
  division,
};

//ES Module (llega ene l año 2015)
