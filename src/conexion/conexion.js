import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

// Obtener la URL de conexión desde las variables de entorno
const uri = process.env.URL;

const connectDB = async () => {
  try {
    // Intentar conectar a MongoDB Atlas
    await mongoose.connect(uri);
    console.log('✅ Conectado a MongoDB Atlas');
  } catch (err) {
    console.error('❌ Error de conexión:', err);
    process.exit(1); // Detiene el servidor si no se puede conectar
  }
};

export default connectDB;
