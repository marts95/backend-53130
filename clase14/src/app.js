//CLASE 14 - Mongoose

//Temas de hoy:

//1) Clientes de base de datos
//2) MongoDB Atlas
//3) DBaas (Database as a service)
//4) Configurar e instalar Mongoose
//5) CRUD en nuestra APP

///////////////////////////////////////////////////////////////////////////////////////////////////////
import express from "express";
import usuariosRouter from "./routes/usuarios.router.js";
const app = express();

const PUERTO = 8080;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas
app.use("/", usuariosRouter);

//Listen
app.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto: ${PUERTO}`);
});

//Nos conectamos a MongoAtlas por medio de mongoose:

import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://martorressisanchez95:panaderiasanchez@cluster0.ngz7kcs.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Conectados a la BD!"))
  .catch((error) => console.log("Tenemos un error, vamos a morir", error));
