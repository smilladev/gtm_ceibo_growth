import mongoose, { Schema, model, models } from 'mongoose';

const DataSchema = new Schema({
  email: { type: String, required: true },
  telefono: { type: String, required: false },
  cedula: { type: String, required: false },
},{ collection: 'gtm_cg' });

const Data = models.Data || model('Data', DataSchema);
export default Data;