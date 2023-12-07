import express, { Router } from 'express';
//import { validateToken } from '../../../helpers/verifyToken';
import { listAllMessagesController, messageCreateController} from '../dependencies';

export const messageRouter: Router = express.Router();

/*messageRouter.post('/', messageCreateController.run.bind(messageCreateController));

messageRouter.post('/login',loginUserController.run.bind(loginUserController))*/

messageRouter.post('/', messageCreateController.run.bind(messageCreateController));

messageRouter.get('/' , listAllMessagesController.run.bind(listAllMessagesController))

/*messageRouter.delete('/:id',validateToken, messageDeleteController.deleteUser.bind(messageDeleteController));

messageRouter.put('/password/:id',validateToken, updatePasswordController.run.bind(updatePasswordController));

messageRouter.put('/status/:id', validateDeletUserController.run.bind(validateDeletUserController));*/