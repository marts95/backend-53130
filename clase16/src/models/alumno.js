import mongoose from "mongoose";

const alumnoSchema = new mongoose.Schema({
  nonbre: {
    type: String,
    index: true,
  },
  apellido: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  edad: Number,
  // cursos: [],
  cursos: [{ type: mongoose.Schema.Types.ObjectId, ref: "cursos" }],
});

//Middleware PRE de Mongoose: (para evitar concatenar el  en cada consulta, queda configurado en toda la applicacion)
alumnoSchema.pre("findOne", function (next) {
  this.populate("cursos");
  next();
});

const AlumnoModel = mongoose.model("alumnos", alumnoSchema);

export default AlumnoModel;
