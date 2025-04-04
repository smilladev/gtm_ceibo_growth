import mongoose, { Schema, model, models } from 'mongoose';

const DataSchema = new Schema({
  email: { type: String, required: true },
  telefono: { type: String, required: false },
  cedula: { type: String, required: false },
  fglid: { type: String, required: false },
  gclid: { type: String, required: false },
  pagina_de_entrada: { type: String, required: false },
  UTM_Source: { type: String, required: false },
  UTM_Medium: { type: String, required: false },	
  UTM_Campaign: { type: String, required: false },
  Pagina_de_salida: { type: String, required: false },
  Codigo_de_retorno: { type: String, required: false }

},{ collection: 'Data' });

const Data = models.Data || model('Data', DataSchema);
export default Data;