import express from "express";
const router = express.Router();

//Array de usuarios
const users = [];

//Creamos una ruta para obtener el listado de mascotas
router.get("/api/users", (req, res) => {
  res.send(users);
});

//Ruta para cargar mascotas
router.post("/api/users", (req, res) => {
  const nuevoUsuario = req.body;
  users.push(nuevoUsuario);
  res.send({ message: "Usuario creado correctamente" });
});

//Tenemos que exportarlo:
export default router;
