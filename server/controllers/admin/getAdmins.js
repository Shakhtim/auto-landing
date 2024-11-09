import expressAsyncHandler from 'express-async-handler';
import { client } from '../../config/db.js';

const getOrders = expressAsyncHandler(async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM orders');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default getOrders;
