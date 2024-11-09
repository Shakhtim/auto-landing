import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import adminRoutes from './routes/adminRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import conectDb from './config/db.js';
import env from 'dotenv';

// Получение текущего файла и директории
console.log(cors);

env.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT_SERVER || 3001;

conectDb();

app.use('/admin', adminRoutes);
app.use('/admin/orders', orderRoutes);
app.use('/api', orderRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
