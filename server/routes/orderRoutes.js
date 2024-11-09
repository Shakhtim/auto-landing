import express from 'express';
import getOrders from '../controllers/orders/getOrders.js';
import createOrder from '../controllers/orders/createOrder.js';
const secretKey = process.env.REACT_APP_SECRET_KEY_API;

const router = express.Router();

router.route('/get').get(getOrders);
router.route(`/`).get(getOrders);
router.route('/create').post(createOrder);

export default router;
