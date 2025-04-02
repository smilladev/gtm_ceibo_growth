import mongoose, { Schema, model, models } from 'mongoose';

const DataSchema = new Schema({
  email: { type: String, required: true },
  telefono: { type: Number, required: true },
  cedula: { type: Number, required: true },
});

const Data = models.Data || model('Data', DataSchema);
export default Data;