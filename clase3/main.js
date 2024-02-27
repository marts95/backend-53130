//1) Enfoque sincrónico vs asincrónico

// Programación sincrónica

//Enfoque de programación en donde las tareas se ejecutan secuencialmente en el orden en que se escriben.
//Cada tarea es bloqueante de la siguiente.

console.log("Primero");
console.log("Segundo");
console.log("Tercero");

//Ejemplo con funciones:

function a() {
  console.log("1");
  b();
}

function b() {
  console.log("2");
  c();
}

function c() {
  console.log("3");
}

a();

//¿Porque seria un problema trabajar con el enfoque sincronico en una aplicacón Ecommerce?

//1) Login
//2) Se bloquea esperando la respuesta en el

//Programación Asincrónica

//Es un enfoque o estilo de programación en el que las tareas se ejecutan en segundo plano y bloquean la ejecución de la siguente tarea.
//Las tareas son independientes y no bloquean el flujo de ajecucuión de la App. Por ejemplo, si trabajo con un API, no voy a bloquear la ejecución de mi código hasta que la petición se complete. Muy útil cuando trabajamos con base de datos y servidores.

//setTimeout().
//La vams a usar para simular una petición a una API

setTimeout(() => {
  console.log("Primer tareaaaaaaa");
}, 1000);

setTimeout(() => {
  console.log("Otra tarea más");
}, 3000);

console.log("Segunda tarea, ah re loco");

//2) Callback

//¿Que es una función callback? Es una función que pasamos como argumento o paramétro a otra función.
//¡¡¡¡Ojota!!!! A no confundir con las FOS "Funciones de Orden Superior".

//Una FOS es un función que recibe otra función por parámetro, mientras que un callback es la función que se pasa como argumento a otra.

function suma(numA, numB, callback) {
  let resultado = numA + numB;
  callback(resultado);
}

function mostrarResultado(resultado) {
  console.log("El resultado de la operación es: " + resultado);
}

suma(10, 5, mostrarResultado);

//Función MAP: la función MAP es una función de orden  superior que recibe como parámetro una función calllback

let numeros = [1, 2, 3, 4, 5];

const numerosDuplicados = numeros.map((numero) => numero * 2);
console.log(numerosDuplicados);

//¿Como hariamos esta función map?

function mapear(array, cb) {
  let nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
    nuevoArray.push(cb(array[i]));
  }
  return nuevoArray;
}

function duplicar(numero) {
  return numero * 2;
}

console.log("Nueva función MAP caserita: " + mapear(numeros, duplicar));

//3)Promesas
//Las promesas son objetos que representan un hecho eventual a futuro.
//Las vamos a utilizar en operaciones asincrónicas que pueden resultar exitosas o fallidas.

//Las promesas tienen 3  estados:
//Pendiente: (pending) Estado inicial de la promesa. La operación asincrónica aún no se ha completado ni rechazado.
//Exitoso: (fullfilled) La operación asincrónica se completó correctamente y se resuelve la promesa. Generalmente esto ocurre cuando se deculeve un valor o resultado.
//Fallida: (rejected) La operación asincrónica falló y se rechazó la promesa. Esto puede pasar por algún error de la operación.

//Creación de una promesa:
const promesa = new Promise((resolve, rejected) => {
  //Acá va el código que queremos ejecutar

  //Resolve y reject son funciones que nos provee la promesa para indicarle el estado de la misma

  //Si fue exitoso, utilizo resolve y fue fallida rejected
  let estado = false;
  if (estado) {
    resolve("Exito en la promesa, me llegó mi camiseta de Messi");
  } else {
    rejected("Fracasamos, tengo otra taza más");
  }
});

console.log(promesa);

//Método THEN y CATCH
//Nos permiten manejar el resultado de la promesa

//THEN: recibe una función que se va a ejecutar cuando la promesa se resuelvo exitosamente.
//CATCH: recibe una función que se va a ejecutar cuando la promesa se rechace.
//FINALLY: recibe una función que se va a ejecutar cuando la promesa se resuelva o se rechace. Es opcional y se agregó con ES8.

promesa
  .then(() => console.log("Roberto me envio la camiseta firmada"))
  .catch(() => console.log("Roberto dedició cambiarse de comisión"))
  .finally(() => console.log(" Fin del proceso"));

//Lo podemos practicar con un array de datos:

const productos = [
  { id: 1, nombre: "Mesa", precio: 5000 },
  { id: 2, nombre: "Silla", precio: 1500 },
  { id: 3, nombre: "Cuadro", precio: 300 },
];

//Voy a crear una promesa que me devuelva un producto por su id:

function buscarProductoPorID(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const producto = productos.find((item) => item.id === id);
      if (producto) {
        res(producto);
      } else {
        rej("No existe el producto!");
      }
    }, 4000);
  });
}

buscarProductoPorID(2)
  .then((producto) => console.log(producto))
  .catch((error) => console.log(error));
buscarProductoPorID(28)
  .then((producto) => console.log(producto))
  .catch((error) => console.log(error));

//4)Async await

//Con la palabrita await genero un papusa en la ejecución del código hasta que la promesa se resuelva o se rechace.
//El tema es que para poder usar el await la función donde la use deber ser un async.

// async function buscarProductoAsync(id){
//     const producto = await buscarProductoPorID(id);
//     console.log(producto);
// }

// buscarProductoAsync(3)

//Generalmente se usa en conjunto con el bloque try catch, para manejar los errores:

async function buscarProductoAsync(id) {
  try {
    const producto = await buscarProductoPorID(id);
    console.log(producto);
  } catch(error) {
    console.log(error);
  }
}

buscarProductoAsync(1);

//Fetch:

fetch("https://jsonplaceholder.typicode.com/users")
  .then((respuesta) => respuesta.json())
  .then(usuarios => console.log(usuarios));
