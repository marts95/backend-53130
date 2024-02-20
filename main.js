// Clase 1 - Principios bàsicos de JS

//1) Platillas literales

//Me permiten concatenar strings de una forma màs sencilla y legible

let mascota = "Fatiga";

let mascotaEdad = 5;

console.log("Nuestro perro " + mascota + " tiene " + mascotaEdad);

//Ahora

console.log(`Nuestro perro ${mascota} tiene ${mascotaEdad}`);

console.log(`Nuestro perro ${mascota} tiene ${mascotaEdad + 1}`);

//2) Funciones

//Son bloques de código que se puede encapsular y reutilizar en nuestro programa. no se olviden que una función debe tener una sola responsabilidad

//CodeMetrics, extensión de VS que nos ayuda a realizar buenas funciones

//Tenemos dos categorias de funciones en JS:

//FUNCIONES DECLARATIVAS

//1) Las declaramos:
function saludarComision53130(curso) {
  console.log("Hola comisión " + curso);
}

//2) Las invocamos:
saludarComision53130("53130");

//¿Se puede invocar una función antes de  su declaración? Se puede hacer gracias al "hoisting" (elevar) que es un proceso interno que realiza el lenguaje durante la lectura del código, en donde eleva las declaraciones dde las funciones. Pero solo con funciones declarativas

//FUNCIONES EXPRESIVAS

//Estas se definen utilizando una expresión. Las vamos a trabajar, en general, asignandolas a alguna variable

let nuevoSaludo = function (curso) {
  console.log("La mejor comision  del condado " + curso);
};

nuevoSaludo("Backend");

//Las funciones anónimas  siempre estuvieron en JS, incluso en sus primeras versiones. Lo que si llega en ES6 son las:

//FUNCIONES FLECHA

//Estas funciones son un forma mas corta y simple de escribir funciones expresivas

//flecha =>

const ultimoSaludo = (curso) => {
  console.log("Todos amamos el curso de: " + curso);
};

ultimoSaludo("Backend!!!");

//forma m

//3) Scope
//4) Closures
//5) Clases y POO en JS
