import mongoose from 'mongoose';

async function conectDb() {
    try {
        const dbConnectionString = `${process.env.DB_SERVER}/${process.env.DB_NAME}`;

        await mongoose.connect(dbConnectionString);
        return true;
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        return false;
    }
}

export default conectDb;
