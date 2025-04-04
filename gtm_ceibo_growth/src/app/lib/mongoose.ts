
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || "";


export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  return mongoose.connect(MONGO_URI); // Ya no necesitas las opciones obsoletas
}
