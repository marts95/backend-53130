// CLASE 5 -- NPM ADMINISTRADOR DE PAQUETES  //

//Temas de hoy:

//Repasar que es Node y su uso en Backend
//Módulos propios, nativos y de terceros

//Módulo: es un archivo que contiene código de JS que encapsula una funcionalidad específica. Los módulos se usan para reutilizar el código y mantenerlo organizado.

//Modulos escritos por nosotros:

const operaciones = require("./operaciones.js")
//"Require" es una fucnión que me permite cargar o "requerir" algún módulo en particular.

console.log(operaciones.suma(5,5));
console.log(operaciones.resta(10,5));
console.log(operaciones.multi(10,10));
console.log(operaciones.division(25,5));

//Módulos nativos: son los que vienen incluidos en NodeJS. No es necesario isntalarlos, solo importarlos para poder usarlos.

//Los más conocidos:
//1) FyleSystem: permite trabajar con el sistema de archivos de la compu. 
//2) Módulo HTTP: permite crear un servidor web
//3) Módulo Crypto. permite encriptar datos
//4) Módulo Path: permite trabajar con rutas de archivos y directorios
//5) Módulo Timers: setTimeout, setInterval, ettc
//6) Módulo Console: para mostrar mensajes por consola

//Módulo de terceros: no vienen incluidos en node y los tenemos que instakar nosotros

//NPM y el proceso de instalación
//Pasos para instalar módulos de terceros:

//1) Instalamos el módulo de terceros desde la terminal con el comando "mpn install nombreModulo"

//npm instal moment
//npm i express

//Actualización de dependencias y políticas
//Y si lo quiero borrar: npm uninstall moment

//Instalamos dependencias de desarrollo.(Esta dependencia solo la usamos en etapa de desarrollo)

//npm i nodemon -D

let cliente = "firulais";
console.log(cliente);

//Los scripts son comandos personalizados por nosotros mismos
//Para ejecutarlos coloquen la palabrita "run" antes. Menos en start.

//Si queres revisar las dependencias globales:
//npm outdated -g
//npm update -g

