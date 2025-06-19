import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
    cliente: { type: String, required: true },
    domicilio: { type: String, required: true },
    telefono: { type: Number, required: true },
  });

  const modelClientes = mongoose.model("clientes", clienteSchema);

  

  export default  modelClientes;