import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #wises = new Map()

    list() {
        return Array.from(this.#wises.entries())
            .map((wiseArray) => {
                const id = wiseArray[0]
                const data = wiseArray[1]

                return {
                    id,
                    ...data
                }
            })
    }

    create(wise) {
        const wiseId = randomUUID()

        this.#wises.set(wiseId, wise)
    }

    update(id, wise) {
        this.#wises.set(id, wise)
    }

    delete(id) {
        this.#wises.delete(id)
    }
}