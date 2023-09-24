const Sequelize = require('sequelize')
const db = require('./db')

const Sala = db.define('salas', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Se a tabela não existir cria a tabela
//Sala.sync()

//Apaga a tabela e cria novamente
//Sala.sync({ force: true})

//altera as configurações da tabela se tiver
//Sala.sync({ alter: true})

module.exports = Sala