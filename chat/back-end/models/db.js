const Sequelize = require('sequelize')

const sequelize = new Sequelize('chat', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log("Conectado")
}).catch(() => {
    console.log("Erro")
})

module.exports = sequelize