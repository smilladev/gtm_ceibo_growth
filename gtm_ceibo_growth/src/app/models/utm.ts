import mongoose, { Schema, model, models } from 'mongoose';

const UtmSchema = new Schema({
    utmSource: { type: String, required: false },
    utmMedium: { type: String, required: false },
    utmCampaign: { type: String, required: false },
    utmContent: { type: String, required: false },
    Gclid: { type: String, required: false }

},{ collection: 'Utm' });

const Utm = models.Utm || model('Utm', UtmSchema);
export default Utm;