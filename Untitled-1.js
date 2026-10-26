import { db } from '../database/db.js';

class PokemonService {
    async listarPokemon() {
        const res = await db('pokemons').select('*');
        return res;
    }
}

export const pokemonService = new PokemonService();

