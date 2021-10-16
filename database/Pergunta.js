const Sequelize = require("sequelize");
const connection = require("./database");


// Definição de model de uma tabela
const Pergunta = connection.define('perguntaS', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// Verifica se a tabela já existe se não é criada
Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;