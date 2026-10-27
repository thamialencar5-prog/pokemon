
import { Router } from 'express';
import { pokemonController } from '../controller/pokemon.controller.js';

export const pokemonRouter = Router();

pokemonRouter.get('/', pokemonController.getAll);
pokemonRouter.get('/:id', pokemonController.getById);

pokemonRouter.post('/', pokemonController.create);

pokemonRouter.put('/:id', pokemonController.updatePut);
pokemonRouter.patch('/:id', pokemonController.updatePatch);

pokemonRouter.delete('/:id', pokemonController.delete);


