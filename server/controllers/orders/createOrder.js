import expressAsyncHandler from 'express-async-handler';
import orderModel from '../../model/orderModel.js';

const createOrder = expressAsyncHandler(async (req, res) => {
    const { id, name, phone, ip, brand, model, configuration, firstPayment, loanTerm, entryPoint, yclid, type } = req.body;
    try {
        const newOrder = await orderModel.create({
            id,
            name,
            phone,
            ip,
            brand,
            model,
            configuration,
            firstPayment,
            loanTerm,
            entryPoint,
            yclid,
            type,
        });
        res.status(201).send({ message: 'Отзыв успешно создан!', order: newOrder });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Ошибка при создании отзыва', error });
    }
});

export default createOrder;
