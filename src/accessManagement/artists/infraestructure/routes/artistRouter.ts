import express, { Router } from 'express';
//import { validateToken } from '../../../helpers/verifyToken';
import { artistCreateController, listAllArtistsController} from '../dependencies';

export const artistRouter: Router = express.Router();

artistRouter.post('/', artistCreateController.run.bind(artistCreateController));

artistRouter.get('/', listAllArtistsController.run.bind(listAllArtistsController));