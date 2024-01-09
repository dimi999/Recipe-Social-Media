const { db } = require('./db');
const User = require('./models/User');

async function initDB() {
    try {
        await db.authenticate();
        console.log('Connection to the database has been established successfully.');

        await db.sync({ force: true }); // Use { force: true } to drop existing tables

        console.log('Database synchronized');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

initDB();