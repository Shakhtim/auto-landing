import { client } from '../../config/db.js';

const createOrder = async orderData => {
    const { name, phone, ip, brand, model, configuration, firstPayment, loanTerm, entryPoint, yclid, type } = orderData;

    const query = `
        INSERT INTO orders (name, phone, ip, brand, model, configuration, first_Payment, loan_term, entry_point, yclid, type)
        VALUES (\$1, \$2, \$3, \$4, \$5, \$6, \$7, \$8, \$9, \$10, \$11)
        RETURNING *;
    `;

    const values = [name, phone, ip, brand, model, configuration, firstPayment, loanTerm, entryPoint, yclid, type];

    try {
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error('Error creating order: ' + error.message);
    }
};

export default createOrder;
