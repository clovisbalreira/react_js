const Sequelize = require('sequelize')
const db = require('./db')

const Usuario = db.define('usuarios', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

// Se a tabela não existir cria a tabela
//Usuario.sync()

//Apaga a tabela e cria novamente
//Usuario.sync({ force: true})

//altera as configurações da tabela se tiver
//Usuario.sync({ alter: true})

module.exports = Usuario