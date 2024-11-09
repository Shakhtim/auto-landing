import expressAsyncHandler from 'express-async-handler';
import orderModel from '../../model/orderModel.js';

const getOrders = expressAsyncHandler(async (req, res) => {
    const orders = await orderModel.find();
    res.status(200).json(orders);
});

export default getOrders;
