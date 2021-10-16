const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'admin', 'd9z1199N',{
    host: 'mysqlserver.cjhwk0qrane0.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
})

module.exports = connection;