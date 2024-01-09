const { DataTypes } = require('sequelize');
const { db } = require('../db');

const User = db.define('User', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    // Add other attributes
});

module.exports = User;