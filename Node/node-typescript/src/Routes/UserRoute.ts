import express, { Request, Response } from 'express'
import { Users } from '../models/user'
import { createUser, deleteUser } from '../services/UserService'

import { IVerifyDataBody } from './types'

const server = express()
server.use(express.json())



const UserRoute = (server: any) => {

    server.get('/list-users', (req: Request, res: Response) => {
        return res.status(201).json({
            error: false,
            Users
        })




    })

    server.post('/create-user', (req: Request, res: Response) => {

        const { id, name, email, password }: IVerifyDataBody = req.body

        console.log(id, name, email, password)

        if(!id || !name || !email || !password){
            return res.status(400).json({
                message: 'Parâmetro em falta. Verifique o corpo da mensagem enviada'
            })
        }
        
        createUser(id, name, email, password)

        return res.status(200).json({
            message: 'Usuário criado com sucesso!'
        })
    })

    server.delete('/delete-user/:id', (req: Request, res: Response) => {

        const id = req.params.id
        deleteUser(parseInt(id))

        return res.status(200).json({
            message: "Usuário deletado com sucesso"
        })

    })
}

module.exports = UserRoute