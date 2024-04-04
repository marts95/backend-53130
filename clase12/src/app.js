//CLASE 12 - MONGODB//

//Instalamos MongoDB

//Para ver las colleciones en la terminal de la pc ingreso show dbs

//Para crear una base de datos escribo use + nombre de base

//Para crear una coleccion nos aseguramos que estamos en la base de datos y escribimos db.createCollection("nombre de coleccion")

//Para cambiar entre base de datos uso el comando use + nombre de base(no pisa base de datos si ya existe una coleccion con ese nombre)

//Para listar las colecciones pongo show collections

//Para borrar una coleccion pongo db.nombrecoleccion.drop()

//Para borrar una base de dato pongo db.dropDatabase(); estando parado sobre la base de datos

//Para crear un documento dentro de una coleccion:

//db.nombreColeccion.insertOne({datos json como en postman})

//Para ver todos lo objetos dentro de una coleccion db.nombreColeccion.find()

// Para insertar varios documentos juntos se pone db.mascotas.insertMany([
//   {
//     "nombre": "Bobby",
//     "edad": 5
//   },
//   {
//     "nombre": "Manchita",
//     "edad": 1
//   },
//   {
//     "nombre": "Michi",
//     "edad": 15
//   },
//   {
//     "nombre": "Pulga",
//     "edad": 3
//   }
// ]
// )

//Para filtar todos los datos por una propiedad db.mascotas.findOne({"edad":1})

//Para filtar un dato por una propiedad db.mascotas.findOne({"edad":1})