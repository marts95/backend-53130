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

const AlumnoModel = mongoose.model("alumnos", alumnoSchema);

export default AlumnoModel;
