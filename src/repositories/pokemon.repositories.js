import { knex } from "../database/knex.js";

class PokemonRepository {
    async getall() {
        return await knex("pokemon").select("*");
    }

    async getById(id) {
        return await knex("pokemon")
            .where({ id })
            .first();
    }

    async create(dados) {
        const pokemon = await Knex("pokemon")
            .insert(dados)
            .returning("*");

        return pokemon[0];
    }

    async delete(id) {
        const pokemon = await Knex("pokemon")
            .where({ id })
            .del()
            .returning("*");

        return {
            mensagem: "Pokemon deletado",
            pokemon: pokemon[0]
        };
    }

    async updatePut(id, dados) {
        const pokemon = await Knex("pokemon")
            .where({ id })
            .update(dados)
            .returning("*");

        return {
            message: "Pokemon atualizado com sucesso",
            pokemonAtualizado: pokemon[0]
        };
    }

    async updateKnex(id, dados) {
        const pokemonAtualizado = await Knex("pokemon")
            .where({ id })
            .update(dados)
            .returning("*");

        return {
            message: "Pokémon atualizado com sucesso!",
            pokemon: pokemonAtualizado
        };
    }
}

export const pokemonRepository = new PokemonRepository();
