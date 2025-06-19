import { Router } from 'express';

import {getAllReparation, getReparationById, agregarEquipo, getAllInstalation, getInstalationById, actualizarEquipo, eliminarEquipo  } from '../controllers/equipo.controllers.js';


const routesEquipos = Router();

routesEquipos.get('/reparacion',getAllReparation);
routesEquipos.get('/reparacion/:id',getReparationById);
routesEquipos.get('/instalacion/:id',getInstalationById);
routesEquipos.get('/instalacion',getAllInstalation);

routesEquipos.post('/agregarequipo',agregarEquipo);

routesEquipos.put('/instalacion/:id',actualizarEquipo);
routesEquipos.put('/reparacion/:id',actualizarEquipo);

routesEquipos.delete('/equipo/:id',eliminarEquipo);

export default routesEquipos;

