import expressAsyncHandler from 'express-async-handler';
import orderModel from '../../../model/orderModel.js';

const deleteOrder = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const order = await orderModel.findById(id);
        if (!order) {
            return res.status(404).send({ message: 'Автосалон не найден' });
        }

        await orderModel.findByIdAndDelete(id);
        res.status(200).send({ message: 'Автосалон успешно удален!' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Ошибка при удалении автосалона', error });
    }
});

export default deleteOrder;
