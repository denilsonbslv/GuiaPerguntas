const Sequelize = require('sequelize');

const connection = new Sequelize('GuiaPerguntas', 'user', 'pass', {
    dialect: 'sqlite',
    host: './database/dev.sqlite'
})

module.exports = connection;