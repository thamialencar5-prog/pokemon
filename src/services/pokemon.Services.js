import { pool } from 'database/db.js';

class PokemonService {
    async listarpokemon() {
        const res = await pool.query("SELECT * FROM pokemon");
        return res.row;

    }
}
export const pokemonService = new PokemonService();