import expressAsyncHandler from 'express-async-handler';
import { client } from '../../config/db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const authAdmin = expressAsyncHandler(async (req, res) => {
    const { login, password } = req.body;

    try {
        // Проверяем, существует ли администратор с таким логином
        const result = await client.query('SELECT * FROM admins WHERE login = $1', [login]);
        const admin = result.rows[0];

        if (!admin) {
            return res.status(401).send({ errorMessage: 'Неправильный логин или пароль' });
        }

        // Проверяем правильность пароля
        const isPasswordValid = await bcrypt.compare(password, admin.password);

        if (!isPasswordValid) {
            return res.status(401).send({ errorMessage: 'Неправильный логин или пароль' });
        }

        // Проверяем наличие JWT_SECRET
        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET не установлен');
            return res.status(500).send({ errorMessage: 'Секретный ключ для JWT не установлен' });
        }

        // Создаем JWT-токен
        const generateToken = admin => {
            return jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
                expiresIn: '30d',
            });
        };

        const token = generateToken(admin);
        return res.status(200).send({ token, admin: { id: admin.id, login: admin.login } });
    } catch (error) {
        console.error('Ошибка при авторизации администратора:', error);
        return res.status(500).send({ errorMessage: 'Ошибка сервера' });
    }
});

export default authAdmin;
