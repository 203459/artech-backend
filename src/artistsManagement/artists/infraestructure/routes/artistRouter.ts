import express, { Router } from 'express';
//import { validateToken } from '../../../helpers/verifyToken';
import { createArtistController, listAllArtistsController, updateArtistController, validateArtistController, getArtistByIdController} from '../dependencies';

export const artistRouter: Router = express.Router();

artistRouter.post('/', createArtistController.run.bind(createArtistController));

artistRouter.get('/', listAllArtistsController.run.bind(listAllArtistsController));

artistRouter.get('/:id', getArtistByIdController.run.bind(getArtistByIdController));

artistRouter.put('/:id', updateArtistController.run.bind(updateArtistController));

artistRouter.put('/validate/:id', validateArtistController.run.bind(validateArtistController));