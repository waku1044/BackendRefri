import express from 'express';
import routes from './src/routes/routes.js';
import cors from 'cors';
import db from './src/conexion/conexion.js';



const PORT = process.env.PORT || 5000;
const server = express();



db();

server.use(express.json())
server.use(cors());
server.use('/api',routes)

server.listen(PORT,()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})