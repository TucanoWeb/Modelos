const express = require('express') //recebe a função express, responsável pelo gerenciamento de rotas

// app recebe a execução de express
const app = express();

//Recebe a função cors
const cors = require('cors')


const User = require('./models/User')

// Converte os dados para json, de forma que o objeto encaminhado na requisição pelo servidor que se comunicou com a api possa ser utilizado no método post e também insere como resposta o cabeçalho abaixo para evitar erro de cors (troca de informações cruzadas)
// É possível também inserir de forma separada ou acrescentar a biblioteca cors, instalando via npm install e depois acrescentando. Seguem os exemplos abaixo:
/*
Forma separada:
app.use(express.json())
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

Agora, utilizando a extensão cors

Criar a const para requerer a biblioteca:
const cors = require('cors')

app.use(express.json())
app.use(cors())

*/

app.use(express.json(), function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//Para evitar problemas de informações cruzadas, o que acaba impedindo as requisoções realizadas
app.use(cors())

// Rota raiz
app.get('/', async (req, res) => {

    res.send('Página Inicial -');

})

// Rota para listar usuários, através do get
app.get('/list-user', async (req, res) => {

    User.findAll()

        .then((response) => {
            return res.json(response)
        })
        .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: 'Erro ao realizar a pesquisa!'
            })
        })
})


// Rota para deletar usuários
app.delete('/delete-user/:id', async (req, res) => {

    console.log(req.params.id)

    User.destroy({
        where: {
            id: req.params.id
        }
    })

        .then(() => {
            return res.json({
                error: false,
                mensagem: 'Usuário deletado com sucesso'
            })
        })
        .catch(() => {
            return res.json({
                erro: true,
                mensagem: 'Erro na operação.'
            })
        })

})


// Rota para atualizar o respectivo usuário, recebendo o parâmetro id
app.put('/update-user/:id', async (req, res) => {

    console.log(req.params.id)
    console.log(req.body)

    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })

        .then(() => {
            res.json({
                error: false,
                mensagem: "Usuário atualizado com sucesso!"
            })
        })
        .catch(() => {
            res.json({
                error: true,
                mensagem: "Erro na requisição!"
            })
        })

})



// Rota cadastrar como endpoint na requisição da api ou axios, por exemplo
app.post('/cadastrar', async (req, res) => {
    console.log(req.body)

    //Aguarda a requisição e atribui, utilizando o módulo create do sequelize, os valores do objeto repassados pela aplicação que realizou a requisição. Mais acima, é possível verificar que os dados repassados pelo requisitante, no caso o servidor que se comunicou com essa api, foram utilizados como json, utilizando o módulo use do express.
    await User.create(req.body)
        //A mensagem em .then retorna a estrutura, em json, para a aplicação que fez a requisição. A aplicação pode ser o axios, por exemplo
        .then(() => {
            return res.json({
                erro: false,
                mensagem: 'Usuário cadastrado com sucesso!'
            })
        })
        //A mensagem abaixo é enviada para a aplicação que fez a requisição, em caso de erro.
        .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: 'Erro ao cadastrar o usuário!'
            })
        })

    //res.send('Página cadastrar');

})


// Define a porta que será utilizada.
app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080')
})

