// Extensão para conexão com banco de dados. É possível repassar os itens que serão cadastrados no banco de dados como objetos. 
const Sequelize = require('sequelize');

// Cria a instância do objeto com os parâmetros: database, usuário, senha, host e dialect (tipo de banco de dados)
const sequelize = new Sequelize('reactteste1', 'ReactTeste1', 'k8wxeiyjN5BKptBM', {
    host: '95.216.252.56',
    dialect: 'mysql'
});

// Apenas para retornar se a conexão foi realizada com sucesso!
sequelize.authenticate()
.then(function(){
console.log('Conexão com banco de dados realizado com sucesso!')
}).catch(function() {
    console.log('Ação não realizada.')
})

// Exporta o módulo com o valor do objeto que foi instanciado
module.exports =  sequelize;