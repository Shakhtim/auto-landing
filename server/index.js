import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import adminRoutes from './routes/adminRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { connectDb } from './config/db.js'; // Исправлено на connectDb
import dotenv from 'dotenv'; // Исправлено на dotenv

dotenv.config(); // Исправлено на dotenv

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT_SERVER || 3001;

connectDb();

app.use('/admin', adminRoutes);
app.use('/admin/orders', orderRoutes);
app.use('/api', orderRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
