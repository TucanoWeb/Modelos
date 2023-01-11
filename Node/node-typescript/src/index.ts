import express from 'express'
import { Router } from 'express'


export const server = express()
server.use(express.json())

const router = Router()

const { UserRoute } = require('./Routes/index')
UserRoute(server)



server.listen(5000, () => {
    console.log('Servidor Iniciado')
})