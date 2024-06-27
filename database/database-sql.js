import { randomUUID } from 'node:crypto'
import { db } from './sql.js'

export class DatabaseSql {
    async list() {
        const wises = await db.query`select * from wise`
        return wises.recordset
    }

    async create(wise) {
        const wiseId = randomUUID()

        const { cpf, embarque, paradas, baldiacao, desembarque } = wise

        await db.query`insert into wise values
            (${wiseId}, ${cpf}, ${embarque}, ${paradas}, ${baldiacao}, ${desembarque})`
    }

    async update(id, wise) {
        const { cpf, embarque, paradas, baldiacao, desembarque } = wise

        await db.query`update wise 
        set cpf = ${cpf}, embarque = ${embarque}, paradas = ${paradas},
        baldiação = ${baldiacao}, desembarque = '${desembarque}'
        where id = '${id}'`
    }

    async delete(id) {
        await db.query`delete from wise where id = ${id}`
    }
}