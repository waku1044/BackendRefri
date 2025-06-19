import { Router } from 'express';
import { getClientById, getAllClients, actualizarCliente, createClient, eliminarCliente } from '../controllers/clientes.controllers.js';


const routesCliente = Router();

routesCliente.get('/cliente/:id',getClientById)
routesCliente.get('/clientes',getAllClients)
routesCliente.post('/clientes',createClient)
routesCliente.put('/cliente/:id',actualizarCliente)
routesCliente.delete('/cliente/:id',eliminarCliente);


export default routesCliente;

