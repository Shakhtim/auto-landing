import pkg from 'pg'; // Импортируем модуль как целое
import dotenv from 'dotenv'; // Импортируем dotenv для работы с переменными окружения
const { Client } = pkg;

dotenv.config(); // Загружаем переменные окружения из .env файла

const client = new Client({
    connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
});

// Функция для подключения к базе данных
export async function connectDb() {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL');
    } catch (error) {
        console.error('Failed to connect to PostgreSQL', error);
        process.exit(1); // Завершаем процесс, если не удалось подключиться
    }
}

// Экспортируем клиент и функцию подключения
export { client };
