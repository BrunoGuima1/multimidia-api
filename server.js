import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory()

server.get('/waywise', () => {
    return database.list()
})

server.post('/waywise', (req, res) => {
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

server.put('/waywise/:id', (req, res) => {
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

server.delete('/waywise/:id', (req, res) => {
    const id = req.params.id
    database.delete(id)
    return res.status(200).send()
})

server.listen({
    port: 3333
})