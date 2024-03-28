// CLASE 10 - WEBSOCKETS

//Temas de hoy

// 1) ¿Qué es Websoockets?
// 2) Sockets.io

//1) Websocket es un protocolo de comunicación bidireccional en tiempo real. A diferencia de HTTP, donde el cliente envia una solicitud y el servidro responde.
//Websocket permite una comunicación continua y en tiempo real entre el cliente y el servidor

//La comunicaciones se realizan entre dos endpoints, cada endpoint recibe el nombre de socket

//¿Cómo funciona?

//A) El clietne tiene que enviar una petición HTTP al servidor y esto se conoce como handshake (apretón de manos)
//B) El servidor recibe la petición y procede a responder el saludo. A esto se lo conoce como "abrir la conexión"
//C) A partir de este momento la comunicación es bidireccinonal entre el cliente y el servidor

{
  /* <img src="public/WEBSCKET.png"> */
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import express from "express";
import exphbs from "express-handlebars";
import viewsrouter from "./routes/views.router.js";

const app = express();
const PUERTO = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//Rutas
app.use("/", viewsrouter);

const httpServer = app.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto: ${PUERTO}`);
});

//Pasos para trabajar con socket.io

//1) Instalamos con npm: npm i socket.io

//2) Importamos el módulo:
import { Server } from "socket.io";

//3) Nos guardamos una referencia de nuestro servidor de express
//ejemplo http server (que tenemos lineas arriba)

//Armamos un array de usuarios:

const usuarios = [
  { id: 1, nombre: "Lionel", apellido: "Scaloni" },
  { id: 2, nombre: "Lionel", apellido: "Messi" },
  { id: 3, nombre: "Pepe", apellido: "Argento" },
  { id: 4, nombre: "Moni", apellido: "Argento" },
  { id: 5, nombre: "Coky", apellido: "Argento" },
  { id: 6, nombre: "Paola", apellido: "Argento" },
];

const io = new Server(httpServer);
//Instancia de Socket.io del lado del servidor

io.on("connection", (socket) => {
  console.log("Un cliente se conectó");

  //Acá voy a escuuchar el evento "mensaje", cuidado con el que el nombre del evento sea igual en el cliente y en el servidor
  socket.on("mensaje", (data) => {
    console.log(data);
  });

  //Ahora el servidor le va a enviar un mensdaje al cliente:
  socket.emit("saludito", "Hola cliente, ¿cómo estás?");

  //Enviamos el array de usuarios:
  socket.emit("usuarios", usuarios);
});
