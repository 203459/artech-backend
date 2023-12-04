import express, { Router } from 'express';
//import { validateToken } from '../../../helpers/verifyToken';
import { 
    createArtistController,
    listAllArtistsController,

} from '../dependencies';

export const artistRouter: Router = express.Router();

artistRouter.post('/', createArtistController.run.bind(createArtistController));

artistRouter.get('/', listAllArtistsController.run.bind(listAllArtistsController));