import express, { Router } from 'express';
//import { validateToken } from '../../../helpers/verifyToken';
import { listAllChatsController, chatCreateController, getChatByIdController} from '../dependencies';

export const chatRouter: Router = express.Router();

chatRouter.post('/', chatCreateController.run.bind(chatCreateController));

chatRouter.get('/' , listAllChatsController.run.bind(listAllChatsController))

chatRouter.get('/:id', getChatByIdController.run.bind(getChatByIdController));