import modelClientes from "../modelo/clientes.models.js";


// Ver a todos los clientes
export const getAllClients = async (req, res) => {
  try {
    const clientes = await modelClientes.find();
    if (clientes.length > 0) {
      res.status(200).json(clientes);
    }else{
        res.status(404).json({message:'No se encontraron clientes.'})
    }
  } catch (error) {
    res.status(500).json({message:'Error en el servidor.',error});
  }
};

// Ver cliente por ID

export const getClientById =  async(req, res) => {
  const id = req.params.id;
  console.log(id)
  try {
      const cliente = await modelClientes.findById(id);
      
      console.log('Cliente con Id: ',cliente)
    if (!cliente) {
        return res.status(404).json({ message: 'Cliente no encontrado.' });
    }else{
      
        res.status(200).json(cliente);
    }
  } catch (error) {
    res.status(500).json({ message: "No se encontro coincidencia." });
  }
};

export const createClient = async (req, res) => {
  const { cliente, domicilio, telefono } = req.body;

  // Validación de los datos antes de intentar agregarlos a la base de datos
  if (!cliente || !domicilio || !telefono) {
    return res.status(400).json({ message: "Faltan campos requeridos" });
  }

  try {
    // Intentar agregar al cliente
    const nuevoCliente = await modelClientes.create({ cliente, domicilio, telefono });
    
    // Responder con éxito
    res.status(200).json({ message: 'Cliente creado con éxito', cliente: nuevoCliente });
  } catch (error) {
    // Log del error para depuración
    console.error('Error al crear cliente:', error);

    // Responder con un mensaje genérico de error
    res.status(500).json({ message: "Error en servidor al crear cliente", error: error.message });
  }
};




export const actualizarCliente = async (req, res)=>{
  const id = req.params.id;
  try {
    const actualizarCliente = await modelClientes.findByIdAndUpdate(id, req.body);
    // Si no se encuentra el registro
    if (!actualizarCliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    // Responder con el registro actualizado
    res.status(200).json({
      mensaje: 'Cliente actualizado correctamente',
      registro: actualizarCliente
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Hubo un error al actualizar el cliente',
      detalles: error.message
    });
  }
};

export const getClientByPhone = async(req, res)=>{
    const phone = req.params.phone;
    try {
        const cliente = await modelClientes.findOne({telefono:phone})
        if(!cliente) return res.status(404).json({message:'No se encontro coincidencia.'})
        return res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor.", error });
    }
};


// export const eliminarEquipo = async(req, res)=>{
//   const { id } = req.params;
  
//   try {
//     if(!id) return res.status(400).json({message:'Falta el ID del equipo.'})
//     const equipoEliminar = await modelEquipos.findByIdAndDelete(id);
//     console.log('Equipo a eliminar: ',equipoEliminar)
//     if(!equipoEliminar)return res.status(404).json({message:'No se encontro equipo.'})
//     console.log('Puesto_2',)
//     res.status(200).json({message:'Equipo eliminado.',eliminarEquipo})

//   } catch (error) {
//     return res.status(500).json({ message: "Error en el servidor", error });
//   }
// }

export const eliminarCliente = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    if (!id) return res.status(400).json({ message: 'Falta el ID del cliente.' });

    // Encuentra y elimina al cliente
    const clienteEliminado = await modelClientes.findByIdAndDelete({ _id: id });
    console.log('Cliente a eliminar: ', clienteEliminado);

    if (!clienteEliminado) {
      return res.status(404).json({ message: 'No se encontró el cliente.' });  // Cambié el 200 por 404
    }

    // Responde con el cliente eliminado o un mensaje de éxito
    return res.status(200).json({ message: 'Cliente eliminado.', clienteEliminado });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor.', error: error.message });
  }
};





