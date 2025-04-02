import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://sergiomilla:YdqgqZlTIfubp8Qp@cluster0.rpvgyzc.mongodb.net/';

if (!MONGO_URI) {
  throw new Error('Por favor, define la URI de MongoDB en tu archivo de configuración');
}

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  return mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}