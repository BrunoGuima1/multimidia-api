import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #Brunos = new Map()

    list() {
        return Array.from(this.#Brunos.entries())
            .map((brunoArray) => {
                const id = brunoArray[0]
                const data = brunoArray[1]

                return {
                    id,
                    ...data
                }
            })
    }

    create(bruno) {
        const brunoId = randomUUID()

        this.#Brunos.set(brunoId, bruno)
    }

    update(id, bruno) {
        this.#Brunos.set(id, bruno)
    }

    delete(id) {
        this.#Brunos.delete(id)
    }
}