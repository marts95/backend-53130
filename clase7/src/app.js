// CLASE 7 - EXPRESS AVANZADO//

//1) Códigos de estado
//2) ¿Qué es una API?
//3) API Rest
//4) Métodos de petición
//5) Postman
//6) Practicamos GET - POST - DELETE - PUT

//Recordemos: el servidor se comunica con el cliente por medio del modelo "cliente-servidor", en donde el cliente hace peticiones = request y el servidor da respuestas = response. Esta comunicación se realiza bajo el protocolo HTTP.

//Los códigos de estado se dividen en 5 clases:

//Los que comienzan con 1xx: son respuestas informativas.
//Los que comienzan con 2xx: son respuestas exitosas, la petición fue recibida, entendida y aceptada.
//Los que comienzan con 3XX: redirecciones, el cliente necesita realizar algunas acciones adcionales.
//Los que comienzan con 4XX: son errores del cliente.
//Los que comienzan con 5XX: son errores del servidor.

//Los más utilizados:
//200: La petición fue exitosa
//400: Bad request
//401: Acceso no autorizado
//403: Tus credenciales no te dan permsiso para ingresar a ese recurso
//404: Not found
//500: Error interno del servidor

//API es el acrónimo de Application Programming Interface = "Interfaz de programación de aplicaciones".
//Es un conjunto de definiciones y reglas que permiten que dos equipos puedan integrarse y trabajar juntos.

//Los formatos más importantes:
//JSON: es un formato de texto sencillo para el intercambio de datos.
//XML: es un lenguaje de marcado creado para almacenar e intercambniar información

//Basta de teoría, vamos a la práctica!!

import express from "express";

const app = express();
const PUERTO = 8080;

//Middleware (lo explicamos en la clase que viene)
app.use(express.json());
//Voy a utilizar JSON para mis datos.
app.use(express.urlencoded({ extended: true }));
//Le dice al servidor que vamos a trabajar con datos complejos, es decir recibir por ejemplo varias querys.

//Array de clientes:
const clientes = [
  { id: "1", nombre: "Lionel", apellido: "Messi" },
  { id: "2", nombre: "Coky", apellido: "Argento" },
  { id: "3", nombre: "Jason", apellido: "Statham" },
  { id: "4", nombre: "Doble", apellido: "Luis Miguel" },
  { id: "5", nombre: "Paola", apellido: "Argento" },
];

//Rutas

//Método get
app.get("/", (req, res) => {
  res.send(clientes);
});

//Version con limite en el retorno de los productos

app.get("/conlimite/:limit", (req, res) => {
  let { limit } = req.params;

  const arrayConLimites = clientes.slice(0, parseInt(limit));
  res.send(arrayConLimites);
});

//Retorno un cliente por id

app.get("/cliente/:id", (req, res) => {
  let { id } = req.params;
  const buscado = clientes.find((cliente) => cliente.id == id);

  if (buscado) {
    res.send(buscado);
  } else {
    res.send("No hay ningún cliente con ese ID");
  }
});

//Trabajamos con una ruta post
app.post("/", (req, res) => {
  const clienteNuevo = req.body;

  clientes.push(clienteNuevo);
  console.log(clientes);
  res.status(201).send({ message: "Cliente nuevo creado" });
});

//Vamos a actualizar un dato: PUT
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, apellido } = req.body;

  //Tengo que encontrar el clinete con este id:
  const clienteIndex = clientes.findIndex((cliente) => cliente.id === id);
  if (clienteIndex !== -1) {
    //Si el cliente existe actualizo los datos
    clientes[clienteIndex].nombre = nombre;
    clientes[clienteIndex].apellido = apellido;
    console.log(clientes);
    res.status(201).send({ message: "Cliente actualizado" });
  } else {
    //Si el cliente no se encuentram tiro este mensaje:
    res.status(400).send({ message: "Cliente no encontrado" });
  }
});

//Vamos a borrar un recurso: DELETE
app.delete("/:id", (req, res) => {
  let id = req.params.id;

  const clienteIndex = clientes.findIndex((cliente) => cliente.id === id);
  if (clienteIndex !== -1) {
    //Si el cliente existe, lo elimino:
    clientes.splice(clienteIndex, 1);

    console.log(clientes);
    res.status(201).send({ message: "Cliente eliminado" });
  } else {
    //Si el cliente no se encuentram tiro este mensaje:
    res.status(400).send({ message: "Cliente no encontrado" });
  }
});

//No se olviden del listen!
app.listen(PUERTO, () => {
  console.log(`Escuchando en el http://localhost:${PUERTO}`);
});
