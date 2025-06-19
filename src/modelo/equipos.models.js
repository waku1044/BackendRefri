import mongoose from "mongoose";

const equipoSchema = new mongoose.Schema({
  idCliente: { type:String, required: true },
  equipo: { type: String, required: true },
  marca: { type: String, required: true },
  tipo: { type: String, required: true },
  falla: { type: String, required: true },
  fecha: { type: String, required: true },
  estado: { type: String, required: true },
  fechaEntrega:{type: String},
  descripcion: { type: String, required: true },
});


const modelEquipos = mongoose.model("equipos", equipoSchema);


export default modelEquipos;
