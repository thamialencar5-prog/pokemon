import { pool  } from 'database/db.js';
import { knex } from '../database/knex.js';

class PokemonController {
    async getAll() {
        const pokemon = await PokemonRepository.getAll()
        return pokemon
    }
     async getById(id) {
        const pokemon = await PokemonRepository.getById(id)
        return pokemon
    }
     async create(data) {
        const pokemonCriado = await PokemonRepository.create(data)
        return pokemonCriado
    }
     async delete(id) {
        const pokemonDeletado = await PokemonRepository.delete(id)
        return pokemonDeletado
    }
    async updatePut(id, data) {
        const pokemon = await pokemonRepository.updatePut(id, data)

        return pokemon
    }
    async updateKnex(id, dados) {
        const [pokemonAtualizado] = await pokemonRepository.updateKnex(id, dados)
        return pokemonAtualizado
    }
}

export const pokemonService = new pokemonService()
    