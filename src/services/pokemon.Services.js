import { pool  } from 'database/db.js';

class Pokemonservice {
    async listarpokemon() {
        const res = await pool.query("SELECT * FROM pokemon");
        return res;

    }
}
export const pokemonservice = new Pokemonservice();

