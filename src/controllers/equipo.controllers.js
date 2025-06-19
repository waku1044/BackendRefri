import modelEquipos from "../modelo/equipos.models.js";

export const getAllReparation = async (req, res) => {
  try {
    const reparacion = await modelEquipos.find({ tipo: "reparacion" });
    if (reparacion.length > 0) {
      
      return res.status(200).json(reparacion);
    } else {
      return res
        .status(404).json();
    }
  } catch (error) {
    return res
      .status(500).json();
  }
};

export const getAllInstalation = async (req, res) => {
  try {
    const instalacion = await modelEquipos.find({ tipo: "instalacion" });
    if (instalacion.length > 0) {
      return res.status(200).json(instalacion);
    } else {
      return res
        .status(404)
        .json();
    }
  } catch (error) {
    return res
      .status(500)
      .json();
  }
};

export const getReparationById = async (req, res) => {
  const id = req.params.id;
  const equipo = await modelEquipos.findById(id);
  try {
    if (!equipo) {
      return res.status(404).json({ message: "No se encontro coincidencia." });
    } else {
      return res.status(200).json(equipo);
    }
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const getInstalationById = async (req, res) => {
  const id = req.params.id;
  const instalacion = await modelEquipos.findById(id);
  try {
    if (!instalacion) {
      return res.status(404).json({ message: "No se encontro coincidencia." });
    } else {
      return res.status(200).json(instalacion);
    }
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const agregarEquipo = async (req, res) => {
  const { equipo, marca, tipo, falla, fecha, estado, descripcion, idCliente } =
    req.body;
  try {
    if (equipo && marca && tipo && falla && fecha && estado && descripcion) {
      const nuevoEquipo = await modelEquipos.create({
        equipo,
        marca,
        tipo,
        falla,
        fecha,
        estado,
        descripcion,
        idCliente,
      });
      res.status(200).json({ message: "Se agrego un nuevo equipo." });
    } else {
      res.status(400).json({ message: "Debe completa todos los campos." });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const agregaClienteYEquipo = async (req, res) => {
  const {
    cliente,
    domicilio,
    telefono,
    equipo,
    marca,
    tipo,
    falla,
    fecha,
    estado,
    descripcion,
  } = req.body;

  console.log(req.body); // Para depurar

  try {
    // Verificar que el cliente tiene toda la información necesaria
    if (cliente && domicilio && telefono) {
      // Crear el cliente en la base de datos
      const nuevoCliente = await models.clientes.create({
        cliente,
        domicilio,
        telefono,
      });

      // Verificar que el equipo tiene toda la información necesaria
      if (equipo && marca && tipo && falla && fecha && estado && descripcion) {
        // Crear el equipo asociado al cliente
        const nuevoEquipo = await modelEquipos.create({
          equipo,
          marca,
          tipo,
          falla,
          fecha,
          estado,
          descripcion,
          idCliente: nuevoCliente.id, // Relacionar con el cliente recién creado
        });

        // Responder al cliente que todo fue exitoso
        return res.json({
          message: "Se registró con éxito cliente y equipo.",
          nuevoCliente,
          nuevoEquipo,
        });
      } else {
        // Si falta información del equipo
        return res.status(400).json({ message: "Faltan datos del equipo." });
      }
    } else {
      // Si falta información del cliente
      return res.status(400).json({ message: "Faltan datos del cliente." });
    }
  } catch (error) {
    // Manejo de errores
    return res.status(500).json({ message: "Error en el servidor", error });
  }
};


export const actualizarEquipo = async (req, res) => {
  const id = req.params.id;
  try {
    // Buscar el registro por ID y actualizarlo
    const registroActualizado = await modelEquipos.findByIdAndUpdate(
      id, 
      req.body, 
      { new: true }  // Esto asegura que obtengas el registro actualizado como respuesta
    );

    // Si no se encuentra el registro
    if (!registroActualizado) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }

    // Responder con el registro actualizado
    res.status(200).json({
      mensaje: 'Registro actualizado correctamente',
      registro: registroActualizado
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Hubo un error al actualizar el registro',
      detalles: error.message
    });
  }
};

export const eliminarEquipo = async(req, res)=>{
  const { id } = req.params;
  
  try {
    if(!id) return res.status(400).json({message:'Falta el ID del equipo.'})
    const equipoEliminar = await modelEquipos.findByIdAndDelete(id);
    console.log('Equipo a eliminar: ',equipoEliminar)
    if(!equipoEliminar)return res.status(404).json({message:'No se encontro equipo.'})
    console.log('Puesto_2',)
    res.status(200).json({message:'Equipo eliminado.',eliminarEquipo})

  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor", error });
  }
}