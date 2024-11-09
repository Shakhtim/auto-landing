import mongoose from 'mongoose';
const settingSchema = new mongoose.Schema(
    {
        phone: { type: String, required: true },
        address: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        working_hours: { type: String, required: true }, // например, "Пн-Пт: 9:00 - 18:00"
        website: { type: String, required: true },
        social_media: { type: [String], required: false }, // массив ссылок на социальные сети
    },
    {
        timestamps: true,
    }
);
const settingModel = mongoose.model('Setting', settingSchema);
export default settingModel;
