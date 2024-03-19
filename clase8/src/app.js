// CLASE 8

//1) Express Router
//2) Middleware
//3) Servicios de archivos estáticos (PUBLIC)
//4) Multer
//5) Primera Pre Entrega del Proyecto final!!! (que miedooooo!!!)

//Express Router: herramienta que me permite separrar mis rutas en distintos módulos.

//Ejercicio de práctica: Mascotas y Usuarios

import express from "express";
const app = express();

const PUERTO = 8080;

//Vamos a vinvular las rutitas:
import userRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";

//Le podemos decir al servidor que vamos a trabajar con datos complejos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);
app.use("/", petsRouter);

//No se olviden del listen o moriremos todos!!!
app.listen(PUERTO, () => `Escuchando en http://localhost:${PUERTO}`);

//SERVICIOS DE ARCHIVOS ESTÁTICOS:
//Express nos permite tener archivos estáticos, es decir, archivos que no cmabian, como html, css, imagenes, etc
//Estos recursos son visibles para el usuario.

//Si yo quiero que al ingresar al localhost:8080 me muestre mi index.html, primero tengo que conertar a la carpeta public en un recurso estático, y lo hago de esta manera:
app.use(express.static("public"));

//Prefijo virtual: si queremos que la carpetita public se llame de otra forma, podemos cambiarlo de esta manera:

// app.use("/firulais", express.static("public"));

//Middleware de terceros: vamos a instalar multer que me permite cargar archivos al servidor.

//A) Instalamos: npm i multer
//B) Importamos el módulo:
import multer from "multer";

//Commo JS:
//const multer = require("multer");

//1) Generamos una constante upload, que almacena toda la configuración de multer.
//2) Creamos una ruta ppara cargar los archivos.

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img");
    //Carpeta donde se guardan las imagenes
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    //Mantengo el nombre original
  },
});

// const upload = multer({ dest: "./public/img" });
//Versión básica

const upload = multer({ storage });

app.post("/upload", upload.single("imagen"), (req, res) => {
  res.send("Imagen cargada");
});

//Apunte para las rutas de la entrega final:
// app.use("/api/products", productsRouter);
// app.use("/api/cartss", cartstsRouter);