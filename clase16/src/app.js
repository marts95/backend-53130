//CLASE 16 - MONGO AVANZADO I

//Temas de hoy:

//1) Teoria de la indexacion
//2) Manejo de Populations en MongoDB
//3) Middleware PRE

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Index:
//La indexacion es una técnica o proceso que realizamos para tener una respuesta a las consultas mucho más rápido.

//Nos permitirá tener una referencia previa al momento de buscar un documento, con el fin de evitar recorrer toda la coleccion, documento por docuumento, hasta encontrar dicho valor.

//Esta referencia es la que se conoce como indice y se crea a partir de uno o varios campos del documento.

import mongoose from "mongoose";
import UserModel from "./models/usuarios.js";

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://martorressisanchez95:coderhouse@cluster0.ngz7kcs.mongodb.net/Coder?retryWrites=true&w=majority&appName=Cluster0"
  );

  const respuesta = await UserModel.find({ edad: { $lt: 19 } }).explain(
    "executionStats"
  );
  //El método explain me da una estadistica de la consulta y le paso el parámetro "executionStats"
  console.log(respuesta);
};

//main();

//Datos obtenidos:

//Resultados por consulta "Carlos"
// nReturned: 111
// ExecutionTimeMillis: 19

//Pero aplicando index:
//ExecutionTimeMillis: 5 (segunda vez 0)

//Si busco menores de 19 añoos:
// nReturned: 384
// ExecutionTimeMillis: 22

//Pero aplicando index:
//ExecutionTimeMillis: 55 (segunda vez 1)

//EJERCICIO CON CURSOS Y ALUMNOS APLICANDO POPULATIONS

import AlumnoModel from "./models/alumno.js";
import CursoModel from "./models/curso.js";

const principal = async () => {
  await mongoose.connect(
    "mongodb+srv://martorressisanchez95:coderhouse@cluster0.ngz7kcs.mongodb.net/Coder?retryWrites=true&w=majority&appName=Cluster0"
  );

  // const estudiantePedro = await AlumnoModel.findById(
  //   "663b871ba8522fe5b505abb4"
  // );
  // console.log(estudiantePedro);

  //Buscamos el curso de Backend:
  // const cursoBackend = await CursoModel.findById("663b8714a8522fe5b505abb0");
  // console.log(cursoBackend);

  //Ahora ingreso el curso al alumno:
  // estudiantePedro.cursos.push(cursoBackend);

  //Actualizo el documento
  // await AlumnoModel.findByIdAndUpdate(
  //   "663b871ba8522fe5b505abb4",
  //   estudiantePedro
  // );

  const estudiantescompletos = await AlumnoModel.findById(
    "663b871ba8522fe5b505abb4"
  ).populate("cursos");
  console.log(estudiantescompletos);
};

// principal();


