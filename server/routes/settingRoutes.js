import express from 'express';
import addSetting from '../controllers/orders/addSetting.js';

const router = express.Router();

router.route('/add').post(addSetting);

export default router;
