import express, { Router } from 'express';
import {getAllReparation, getReparationById, agregarEquipo, agregaClienteYEquipo, getAllInstalation, getInstalationById, actualizarEquipo, eliminarEquipo  } from '../controllers/equipo.controllers.js';
import { bigBoss, getClientById, getAllClients, actualizarCliente, createClient } from '../controllers/clientes.controllers.js';

const routes = express.Router();

routes.get('/reparacion',getAllReparation);
routes.get('/reparacion/:id',getReparationById);
routes.get('/cliente/:id',getClientById)
routes.get('/clientes',getAllClients)

routes.get('/instalacion',getAllInstalation);
routes.get('/instalacion/:id',getInstalationById);

routes.post('/',bigBoss);
routes.post('/reparacion',agregaClienteYEquipo);
routes.post('/instalacion',agregaClienteYEquipo);
routes.post('/agregarequipo',agregarEquipo);
routes.post('/clientes',createClient)

routes.put('/cliente/:id',actualizarCliente)
routes.put('/instalacion/:id',actualizarEquipo);
routes.put('/reparacion/:id',actualizarEquipo);

routes.delete('/equipo/:id',eliminarEquipo);
routes.delete('/cliente/:id',()=>{console.log('Se elimina equipo de instalacion con ID')});

export default routes;

