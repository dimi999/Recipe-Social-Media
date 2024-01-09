const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.DB_LINK);

module.exports = { db, Sequelize };