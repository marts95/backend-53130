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
app.get("/", (req, res) => {
  res.send("Si funcionaaaa!!!");
});

app.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto: ${PUERTO}`);
});
