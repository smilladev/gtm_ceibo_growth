
import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://sergiomilla:YdqgqZlTIfubp8Qp@cluster0.rpvgyzc.mongodb.net/';


export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  return mongoose.connect(MONGO_URI); // Ya no necesitas las opciones obsoletas
}
