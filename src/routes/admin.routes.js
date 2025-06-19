import { Router } from 'express';  // Importamos express completo
import { bigBoss } from '../controllers/admin.controllers.js';

const routeAdmin = Router();  // Usamos Router() de express

routeAdmin.post('/', bigBoss);  // Definimos la ruta POST

export default routeAdmin;  // Exportamos el enrutador
