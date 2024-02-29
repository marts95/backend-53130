//CLASE 4 - MANEJO DE ARCHIVOS//

//1) File System
//Es un manejador de archivos que ya viene incorporado con Node JS.
//Me permite realizar las operaciones de Crear, Leer, Actualizar y borrar registros (CRUD)

//1º Paso: vamos a importar el módulo

const fs = require("fs");

// console.log(fs);

//2) Manejo de archivos de forma sincrónica
//A) Trabajamos de forma sicnrónica

const rutaSin = "./ejemploSin.txt";

//Crear un archivos:

fs.writeFileSync(rutaSin, "Hola, estamos trabajando en un ejemplo sincrónico");

//Leer un archivo:

let contenido = fs.readFileSync(rutaSin, "utf-8");
// //Primer parámetro es el path, el segundo es el tipo de codificación
console.log("Variable contenido: " + contenido);

// let contenido2 = fs.readFileSync("./firulais.txt", "utf-8");
// console.log(contenido2);

//Podemos verificar primero que el archivo exista

if (fs.existsSync("./firulais.txt")) {
  let resultado = fs.readFileSync(rutaSin, "utf-8");
  console.log("Variable resultado: " + resultado);
} else {
  console.log("No existe el archivo, vamos a morir todos!! aaahhh");
}

//Actualizar contenidos:

//Mi forma de actualizar es pisar el contenido
fs.writeFileSync(rutaSin, "Hola, actualizamos la info");

//Agregamos más contenido al final:
fs.appendFileSync(rutaSin, " y este es un texto agregado al final");

//Eliminar un archivo:
fs.unlinkSync(rutaSin);

//3) Manejo de archivos con callbacks
//B)Trabajamos con callback

const conCall = "./ejemplo-con.txt";

fs.writeFile(conCall, "Nuevo archivo, ahora con callbacks", (error) => {
  //El tercer prámetro es el cb, que pregunta si huno algun error.

  if (error) return console.log("No pudimos crear el archivo");

  //Leemos el archivo:
  fs.readFile(conCall, "utf-8", (error, contenido) => {
    if (error) return console.log("No podemos leer");
    console.log(contenido);
    //Acá el cb tiene 2 parámetros, uno el error y segundo el contenido.

    fs.appendFile(conCall, " mas contenido", (error) => {
      if (error) return console.log("No podemos agregar mas contenido");

      fs.unlink(conCall, (error) => {
        if (error)
          return console.log("No podemos eliminarlo, vamos a perder el año");
      });
    });
  });

  //Y si queremos agregar info?
});

//4) Manejo de archivos con promesas
//Para poder trabajar con promesas, tenemos que usar la propiedad "promises" del módulo fs:

const textoPromises = "./texto-pro.txt";

const operacionesAsincronicas = async () => {
  //Crear un archivo
  await fs.promises.writeFile(textoPromises, "Nuevo archivo!!");

  //Leer el archivo
  let respuesta = await fs.promises.readFile(textoPromises, "utf-8");
  console.log(respuesta);

  //Agregar contenido al final
  await fs.promises.appendFile(textoPromises, " agregamos este texto");

  //Releer
  respuesta = await fs.promises.readFile(textoPromises, "utf-8");
  console.log(respuesta);

  //Lo eliminamos
  await fs.promises.unlink(textoPromises);
};

operacionesAsincronicas();

//5) Manejo de datos complejos

//Desarrollamos un array de personas:

const arrayPersonas = [
  {
    nombre: "Pepe",
    apellido: "Argento",
    edad: 50,
  },
  {
    nombre: "Moni",
    apellido: "Argento",
    edad: 38,
  },
  {
    nombre: "Paola",
    apellido: "Argento",
    edad: 17,
  },
  {
    nombre: "Coky",
    apellido: "Argento",
    edad: 15,
  },
  {
    nombre: "Fatiga",
    apellido: "Argento",
    edad: 9,
  },
];

const archivoArgento = "./archivo-argento.json";

//Dee esta forma lo guardamos
const guardarArchivos = async () =>  {
await fs.promises.writeFile(archivoArgento, JSON.stringify(arrayPersonas, null, 2))
}

guardarArchivos();

//Lo recuperamos

const leerArchivos = async () => {
    const respuesta = await fs.promises.readFile(archivoArgento, "utf-8");
    const nuevoArray = JSON.parse(respuesta)
    console.log(nuevoArray);
}

leerArchivos();

//6) Presentar el desafia nº2

