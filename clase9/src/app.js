//CLASE 9 - MOTORES DE PLANTILLAS

//Temas de hoy:
//1) ¿Qué es un motor de plantillas?
//2) Handlebars, instalación y uso
//3) Estructuras, condicionales y ciclos
//4) Organizamos el router de handlebars
//5) Trabajamos con la carpeta public, con js y css

//Preparamos nuestro proyecto:
//npm init -y
//npm i express
//npm i nodemon -D
//Agregamos el script "dev": "nodemon src/app.js"

//Organizamos nuestra app:

const express = require("express");
//import expres from "express"
const app = express();
const PUERTO = 8080;
const viewsRouter = require("./routes/views.router.js");

//Middleware
app.use(express.static("./src/public"));

//Me traigo el módulo de Express-Handlebars
const exphbs = require("express-handlebars");
//import exphbs from "express-handlebars"

//configuramos el motor de plantillas:
// app.engine("handlebars", exphbs.engine());
// app.engine("hbs", exphbs.engine());
app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);
//Le decimos a expres que cuando un archivo de extensión "handlebars" utilice moto de plantillas "handlebars"

app.set("view engine", "handlebars");
//Nuevamente le decimos que la vista de nuestra aplicación es desarrollada con Handlebars

app.set("views", "./src/views");

app.use("/", viewsRouter);

app.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto: ${PUERTO}`);
});
