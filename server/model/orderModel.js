import mongoose, { Schema } from 'mongoose';

const orderSchema = new Schema(
    {
        id: { type: String, required: true },
        dateCreated: { type: Date, default: Date.now },
        name: { type: String, required: true },
        phone: { type: String, required: true },
        ip: { type: String, required: true },
        brand: { type: String, required: true },
        model: { type: String, required: true },
        configuration: { type: String, required: true },
        firstPayment: { type: Number, required: true },
        loanTerm: { type: Number, required: true },
        entryPoint: { type: String, required: true },
        yclid: { type: String, required: true },
        type: { type: String, required: true },
    },
    { versionKey: false }
);

const orderModel = mongoose.model('Orders', orderSchema);

export default orderModel;
