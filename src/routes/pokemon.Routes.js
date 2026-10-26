import { Router } from "express";
import { pokemonService} from "../services/pokemon.Services.js"
export const pokemonRouter = Router()

pokemonRouter.get("/", async (req, res) => {
    const pokemon = await pokemonService.getAll();
    return res.json(pokemon);
});
pokemonRouter.post("/", async (req, res) => {
    const pokemon = await pokemonService.create(req.body);
    return res.json(201).json(pokemon);
});
