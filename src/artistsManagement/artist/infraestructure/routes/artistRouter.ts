import express, { Router } from 'express';
//import { validateToken } from '../../../helpers/verifyToken';
import { 
    createArtistController,
    listAllArtistsController,
    updateArtistController, 
    validateArtistController, 
    getArtistByIdController, 
    updateFollowingController,
    updateLocationController,
    updateProfileImageController,
    filterFollowersByIdController,
    filterFollowingByIdController,

} from '../dependencies';

export const artistRouter: Router = express.Router();

artistRouter.post('/', createArtistController.run.bind(createArtistController));

artistRouter.get('/', listAllArtistsController.run.bind(listAllArtistsController));

artistRouter.get('/:id', getArtistByIdController.run.bind(getArtistByIdController));

artistRouter.put('/:id', updateArtistController.run.bind(updateArtistController));

artistRouter.put('/location/:id', updateLocationController.run.bind(updateLocationController));

artistRouter.put('/profile_image/:id', updateProfileImageController.run.bind(updateProfileImageController));

artistRouter.put('/validate/:id', validateArtistController.run.bind(validateArtistController));

artistRouter.put('/follow/:id', updateFollowingController.run.bind(updateFollowingController));

artistRouter.get('/followers/:id', filterFollowersByIdController.run.bind(filterFollowersByIdController));

artistRouter.get('/following/:id', filterFollowingByIdController.run.bind(filterFollowingByIdController));