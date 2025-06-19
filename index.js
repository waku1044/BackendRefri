import express from 'express';
import routeAdmin from './src/routes/admin.routes.js';
import routesClientes from './src/routes/clientes.routes.js';
import routesEquipos from './src/routes/equipos.routes.js';
import cors from 'cors';
import db from './src/conexion/conexion.js';

const server = express();
const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(express.json())
server.use('/api/admin',routeAdmin);
server.use('/api/clientes',routesClientes)
server.use('/api/equipos',routesEquipos)
db();

server.listen(PORT,()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})