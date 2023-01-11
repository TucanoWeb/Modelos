import request from 'supertest'
import { server } from '../..'
import { createUser } from '../../services/UserService';

const { UserRoute } = require('../../Routes/index')
UserRoute(server)



describe('Teste Rota com supertest', () => {


    it('Should send a request using supertest to list-users route', async () => {
        
        const res = await request(server)
            .get('/list-users')      

        expect(res.statusCode).toEqual(201)

    });

    it('Should send a request using supertest to create-user route', async () => {

        const res = await request(server)
            .post('/create-user')
            .send({
                id: 11,
                name: 'superTest',
                email: 'supertest@mail.com',
                password: '123456'
            })

        expect(res.text).toEqual("{\"message\":\"Usuário criado com sucesso!\"}")

    })

    it('Verifica via supertest se ao informar parâmetro incorreto se createUser está sendo chamado', async () => {

        const res = await request(server)
        .post('/create-user')
        .send({
            id: 11,
            //Faltando nome
            email: 'supertest@mail.com',
            password: '123456'
        })       
        
        const mockFuntion = jest.fn(createUser)

        expect(res.text).toEqual("{\"message\":\"Parâmetro em falta. Verifique o corpo da mensagem enviada\"}")
        expect(mockFuntion).not.toBeCalled()
        
    })


    it('Verifica se o usuário foi deletado. Teste com supertest', async () => {

        const res = await request(server)
        .delete('/delete-user/1')

        expect(res.text).toEqual('{\"message\":\"Usuário deletado com sucesso\"}')
        

    })



})


