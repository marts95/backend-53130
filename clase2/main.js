//Continuamos

//DESESTRUCTURACIÓN: Esta herramienta nos permite extraer datos de un array u objeto de una manera más sencilla y legible.

const pelicula = {
  titulo: "El Padrino",
  director: "Francis Ford Coppola",
  genero: "Drama",
  lanzamiento: 1972,
};

//Antes de ES6

let titulo = pelicula.titulo;

console.log(titulo);

//De esta forma estoy copiando el valor de la propiedad titulo del objeto peliculla a la variable "titulo"

//Con ES6:

let { titulo: tituloPeli, director, genero, lanzamiento } = pelicula;

console.log(genero);
console.log(lanzamiento);

tituloPeli = "Volver al futuro"

console.log(pelicula.titulo);