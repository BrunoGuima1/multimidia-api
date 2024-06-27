import { fastify } from "fastify";
import cors from '@fastify/cors'

import { DatabaseMemory } from "./database/database-memory.js";

const server = fastify();

await server.register(cors, {
    origin: '*',
    methods: ['GET']
})

const database = new DatabaseMemory()

server.get('/wise', () => {
    return database.list()
})

server.post('/wise', (req, res) => {
    const { cadastro, horario, embarque, desembarque, confirm } = req.body

    database.create({
        cadastro,
        horario,
        embarque,
        desembarque,
        confirm
    })

    return res.status(201).send()
})

server.put('/wise/:id', (req, res) => {
   const id = req.params.id
   const { cadastro, horario, embarque, desembarque, confirm } = req.body

   database.update(id, {
    cadastro,
    horario,
    embarque,
    desembarque,
    confirm
   })

   res.status(204).send()
})

server.delete('/wise/:id', (req, res) => {
    const id = req.params.id
    database.delete(id)
    return res.status(200).send()
})

server.listen({
    port: 3333
})