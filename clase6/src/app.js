// CLASE 6 - SERVIDORES WEB //

//1) ¿Qué es un servidor?
//Software o hardware que almacena y administra resursos. Estos recursos pueden ser imagenes, archivos, sitios web, videos, datos, jueguitos. Su funcion es responder a las peticiones de los clientes. Aclaramos: el servidor puede responder a multiples clientes al mismo tiempo. A esta relación se la concoce como modelo cliente-servidor.

//Cliente = request
//Servidor = response

//¿Bajo que protocolo se comunican el cliente y el servidor?
//2) Protocolo HTTP
//Significa "Hypertext Transfer Protocol" o "Protocolo de trasnferencia de hipertexto". Es un protocolo de comunicaciones, es decir, un conjunto de reglas que definen como se comunican dos dispositivos.

//3) Módulo nativo HTTP

// Primer pasito: importar el módulo
// const http = require("http");

//Segundo paso: vamos a crear el servidor web. Para esto vamos a usar un método que se llama createServer(). Este método recibe por parámetro una función callback que va a ser ejecutada cada vez que se realice una petición al servidor. Esta función recibe dos parámateros: request y response.

// const server = http.createServer((request, response) => {
//   console.log("Se realizo una peticion al servidor!");
//   response.end("Mi primer hola mundo desde backend");
// });

//Tercer paso: vamos a poner a escuchar a nuestro servidor en un puerto de la compu.

// const PUERTO = 8080;

// server.listen(PUERTO, () => {
//   console.log(`Escuchando en el http://localhost:${PUERTO}`);
// });

//4) Express JS
//Es un framework minimalista de Node JS que nos permite crear servidores de una forma mucho más sencilla.

//Instalacion: npm i express

//Importamos el módulo:
const PUERTO = 8080;
const express = require("express");

const app = express();

//Rutas

app.get("/", (req, res) => {
  //Cuando utilizo "/" estoy haciendo referencia a la ruta raíz de mi aplicación. La principal
  res.send("Mi primera chamba con Express JS");
});

//Los métodos HTTP o verbos son los que nos permiten indicarle al servidor que tipo de acción queremos realizar. Los más utilizados:

//GET: lo usamos para pedir datos al servidor.
//POST: lo usamos para enviar datos al servidor.
//PUT: lo usamos para actualizar datos del servidor.
//DELETE: lo usamos para eliminar datos del servidor.

// Son los que conforman el CRUD
// get      = C/create
// post    = R/read
// put      = U/update
// delete = D/delete

app.listen(PUERTO, () => {
  console.log(`Escuchando en el http://localhost:${PUERTO}`);
});

//Practicamos con otras rutas: (endpoints)
app.get("/tienda", (req, res) => {
  res.send("Bienvenido a la tienda");
});

app.get("/contacto", (req, res) => {
  res.send("Bienvenidos a Contacto!");
});

//5) Object Request
//Es un objeto que representa la petición que realiza el cliente al servidor. Este objeto tiene información sobre la petición que se realizó, por ejemplo la url, el método, los parámetros, el cuerpo...

//Array de productos Marolio>

const misProductos = [
  { id: 1, nombre: "Fideos", precio: 150 },
  { id: 2, nombre: "Arroz", precio: 250 },
  { id: 3, nombre: "Pan", precio: 350 },
  { id: 4, nombre: "Leche", precio: 450 },
  { id: 5, nombre: "Queso", precio: 550 },
  { id: 6, nombre: "Manteca", precio: 650 },
  { id: 7, nombre: "Gallletitas", precio: 750 },
];

//Vamos a crear una nueva ruta, que se va a llamar "productos" y nos retornará todos los productos del array:

app.get("/productos", (req, res) => {
  res.send(misProductos);
});

//Req.params = contiene los parámtetros de la ruta. Por ejemplos si tenemos la ruta/productos/:id, podemos acceder a ese id de la siguiente manera: req.params.id

app.get("/productos/:id", (req, res) => {
  let id = req.params.id;

  //Siempre que se recupera un dato de los params es un "String"!!!!
  //Para solucionar lo pueden parseInt

  const producto = misProductos.find((producto) => producto.id == id);

  if (producto) {
    res.send(producto);
  } else {
    res.send("Producto no encontrado, vamos a morir!!");
  }
});

//req.query = se refiere a las multiples consultas que se pueden hacer en determinada ruta (endpoint). Simplemente le tenemos que colocar el simbolo de interrogacion (?) y luego el nombre de la consulta.

app.get("/clientes", (req, res) => {
  // let nombre = req.query.nombre;
  // let apellido = req.query.apellido;

  //También lo pueden hacer así:
  let { nombre, apellido } = req.query;

  res.send(`Bienvenido ${nombre} ${apellido}`);
});

//6) Desafio 3
//Ejemplo rustico: como retornar determinada cantidad de productos de un array:

app.get("/product", (req, res) => {
  let limit = parseInt(req.query.limit);

  if (limit) {
    let productos = misProductos.slice(0, limit);
    res.send(productos);
  } else {
    res.send(misProductos);
  }
});
