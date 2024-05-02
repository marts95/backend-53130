import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://martorressisanchez95:coderhouse@cluster0.ngz7kcs.mongodb.net/Coderest?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Conectado a MongooDB, todo es un exito!!"))
  .catch((error) =>
    console.log(
      "Tenemos un error, no sirvo para esto, me vy a a diseño de interiores",
      error
    )
  );
