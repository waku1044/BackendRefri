import express from 'express';
import routes from './src/routes/routes.js';
import cors from 'cors';
import db from './src/conexion/conexion.js';
import  env  from 'dotenv';



const server = express();
const PORT = process.env.PORT || 5000;




server.use(cors({
  origin: 'https://sistema-de-gestio-en-refrigeracion-ozar.vercel.app',
}));
server.use(express.json())
server.use('/api',routes)
db();

server.listen(PORT,()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})