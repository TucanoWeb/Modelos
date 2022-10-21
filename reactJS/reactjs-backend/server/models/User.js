// Drive para conexão com o banco de dados
const Sequelize = require('sequelize')

//Recebe o objeto que foi instanciado em db, através do sequelize
const db = require('./db')

//No primeiro parâmetro, onde está 'user', colocar o nome da tabela. Se a tabela não existir e quiser criá-la, acresente o módulo mais abaixo, sendo User.sync()
const User = db.define('users', {

    // Abaixo, o esqueleto das colunas da respectiva tabela informada acima.
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

// Se a tabela não existir, ela será criada
User.sync()

// Exporta o módulo com o template de envio
module.exports = User