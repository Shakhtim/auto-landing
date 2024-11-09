import pkg from 'pg';
import Chance from 'chance'; // Импортируем Chance
import dotenv from 'dotenv';
const { Client } = pkg;

dotenv.config();

const chance = new Chance(); // Создаем экземпляр Chance

// Настройки подключения к базе данных
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
});

async function generateRandomOrders() {
    await client.connect();

    const orders = [];
    for (let i = 0; i < 73; i++) {
        const order = {
            name: chance.name(),
            phone: chance.phone(),
            ip: chance.ip(),
            brand: chance.word(),
            model: chance.word(),
            configuration: chance.sentence(),
            firstPayment: chance.floating({ min: 1000, max: 10000, fixed: 2 }),
            loanTerm: chance.integer({ min: 1, max: 60 }), // Случайный срок кредита от 1 до 60 месяцев
            entryPoint: chance.url(),
            yclid: chance.string({ length: 10 }),
            type: chance.pickone(['type1', 'type2', 'type3']),
        };
        orders.push(order);
    }

    // Вставка данных в базу данных
    for (const order of orders) {
        await client.query(
            'INSERT INTO orders (name, phone, ip, brand, model, configuration, first_payment, loan_term, entry_point, yclid, type) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
            [
                order.name,
                order.phone,
                order.ip,
                order.brand,
                order.model,
                order.configuration,
                order.firstPayment,
                order.loanTerm,
                order.entryPoint,
                order.yclid,
                order.type,
            ]
        );
    }

    console.log('73 случайные заявки успешно добавлены в базу данных.');
    await client.end();
}

generateRandomOrders().catch(err => console.error(err));
