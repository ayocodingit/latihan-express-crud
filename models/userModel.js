const sequelize = require('sequelize')
const database = require('../config/database')
const { DataTypes } = sequelize

const User = database.define('user', {
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true
});

module.exports = User;