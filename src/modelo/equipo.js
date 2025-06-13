import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
  admin:{type:String, required:true},
  password:{type:String, required:true}
})

const clienteSchema = new mongoose.Schema({
  cliente: { type: String, required: true },
  domicilio: { type: String, required: true },
  telefono: { type: Number, required: true },
});

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

const clientes = mongoose.model("clientes", clienteSchema);
const equipos = mongoose.model("equipos", equipoSchema);
const admin = mongoose.model('admins',adminSchema)

const models = { clientes, equipos, admin };

export default models;
