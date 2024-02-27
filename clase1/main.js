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

//forma más resumida

const chau = (curso) => console.log("chauuu " + curso);

chau("Patin artisitco");

//3) Scope

//Es el alcance que tiene las variables dentro de nuestroo programa
//En JS tenemos dos tippos de scope:

//Scope global: las variables declaradas en este scope pueden ser accedudas desde cualquier parte del programa.

//Scope local: las variables declaradas en el scope local veven dentro del bloque de llaves donde fueron creadas.

let global = 2024;

function saludito() {
  console.log("Hola, estamos en el año " + global);
  let curso = "Backendo";
  console.log("Curso de " + curso);
}

saludito();

//4) Closures

//Los cierres o clausulas en JS es un concepto que se refiere a la capacidad de una funcióon anidada de acceder a las variables de su función padre.

function padre() {
  let deuda = 15000000;
  function anidada() {
    console.log(deuda);
  }
  return anidada;
  //Retirnamos la función anidada, creando el closure
}

let clausula = padre();
console.log(clausula);
clausula();

//¿Qué es lo que ocurre en este ejemplo? La función padre termina su ejecución, pero la función anidada ppuede acceder a la variables deuda.
//Esto se usaba para simular la existencia de variables privadas, en ese momento no existian pero con la llegada de ES6 y las clases pasaron un poco al desuso.

//5) Clases y POO en JS

// Las clases son moldes que nos permiten crear objetos con caracteristicas similares.

//Vamos a crear la clase persona:

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  //Podemos agregar métodos a la clase:

  saludar() {
    console.log("Hola, soy " + this.nombre);
  }

  despedir() {
    console.log("Chau, me fui, soy " + this.nombre);
  }

  //Mètodos estáticos:
  static especie() {
    console.log("Soy un ser humano");
  }

  static planeta = "Tierra";
}

//Vamos a crear una instancia de la clase Persona:

const coky = new Persona("Coky", 29);
console.log(coky);
coky.saludar();
coky.despedir();

//Podemos agregar métodos estáticos, que son métodos que se ejecutan sin necesidad de crear una instancia de la clase.

//¿como ejecuto un método estático?

Persona.especie();
console.log(Persona.planeta);

//Vamos a crear una clase que herede de la clase Persona

class Empleado extends Persona {
  constructor(nombre, edad, sueldo) {
    super(nombre, edad);
    this.sueldo = sueldo;
  }

  saludar() {
    console.log(
      "Hola soy " + this.nombre + " y mi salario es de " + this.sueldo
    );
  }
}

const empleado = new Empleado("Paola", 35, 1000000);
console.log(empleado);
empleado.saludar();