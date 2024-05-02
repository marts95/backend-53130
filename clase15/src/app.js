// CLASE 15 - PRÁCTICA INTEGRADORA 1

//Temas de repaso:

//Clases
//Express
//Router y Multer
//Express-handlebars
//MongoDB y Mongoose

//Actividad
// Vamos a generar un Pinterest, almacenando nuestros usuarios en MongoDB

////////////////////////////////////////////////////////////////////////////////////////////

import express from "express";
import imagenRouter from "./routes/imagen.router.js";
import "./database.js";
import exphbs from "express-handlebars";
import multer from "multer";

const app = express();
const PUERTO = 8080;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

//Configuramos multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/public/img");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

app.use(multer({ storage }).single("image"));
//Rutas
app.use("/", imagenRouter);

//Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "src/views");

//Iniciamos el servidor
app.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto: ${PUERTO}`);
});
