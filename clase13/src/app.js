//CLASE 13

//Para que mongo estime cuantos documentos hay en la coleccion db.nombredecoleccion.estimatedDocumentCount();

//Para un conteo exactos db.alumnos.countDocuments()

//Para filtrar por varias propiedades db.nombredeColeccion.find({$and: [{propiedad json}, {propiedad json}]})

//Para filtrar por varias propiedades, todos los objetos que cumplan cualquiera de las propiedades db.nombredeColeccion.find({$or: [{propiedad json}, {propiedad json}]})

//Para filtar por propiedades numericas, mayor o igual db.nombredecoleccion.find({propiedad: {$gte:valorFiltro})

//Para filtrar por todos los documentos que tengan una propiedad especifica db.nombredeCoelccion.find({propiedad: {$exists:true}})

//Para devolver todos los documentos con solo las propiedades deseadas db.nombredeColeccion.find({}, {"propiedad": 1, "propiedad": 1})

//Para devolverr todos los documentos escluyendo porpiedades no deseadas db.nombredeColeccion.find({}, {"propiedad": 0})

//Para filtrar de manera ordenada los datos, de mayor a menor o viceversa:

//Menos a mayor: db.nombredeColeccion.find().sort({"promedio": 1})
//Mayor a menor: db.nombredeColeccion.find().sort({"promedio": -1})

//Para saltar un numero determinado de documentos, del principio o final:

//Saltar los primeros: db.nombredeColeccion.find().skip(cantidaddeDocumentos a saltar)
//Limitar, sacando los ultimos: db.nombredeColeccion.find().limit(cantidaddeDocumentos mostrar)

//Actualizar un documento db.nombredeColeccion.updateOne({"propiedad":"ValorOriginial"}, {$set:{"propiedad":"ValoeCambiado"}})

//Actualizar varios documentos db.nombredeColeccion.updateMany({"propiedad":"ValorOriginial"}, {$set:{"propiedad":"ValoeCambiado"}})

//Eliminar un documento, solo el primero que cumple la condiciòn db.nombredeCoelccion.deleteOne({"propiedad":"ValorPropiedad"})

//Eliminar varios documentos, solo los que cumple la condiciòn db.nombredeCoelccion.deleteOne({"propiedad":"ValorPropiedad"})