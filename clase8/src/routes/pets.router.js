import express from "express";
const router = express.Router();

//Array de mascotas
const pets = [];

//Creamos una ruta para obtener el listado de mascotas
router.get("/api/pets", (req, res) => {
  res.send(pets);
});

//Ruta para cargar mascotas
router.post("/api/pets", (req, res) => {
  const nuevaMascota = req.body;
  pets.push(nuevaMascota);
  res.send({ message: "Mascota creada correctamente" });
});

//Tenemos que exportarlo:
export default router;