import express, { Router } from 'express';
//import { validateToken } from '../../../helpers/verifyToken';
import { listAllChatsController} from '../dependencies';

export const chatRouter: Router = express.Router();

/*userRouter.post('/', userCreateController.run.bind(userCreateController));

userRouter.post('/login',loginUserController.run.bind(loginUserController))*/

chatRouter.get('/' , listAllChatsController.run.bind(listAllChatsController))

/*userRouter.delete('/:id',validateToken, userDeleteController.deleteUser.bind(userDeleteController));

userRouter.put('/password/:id',validateToken, updatePasswordController.run.bind(updatePasswordController));

userRouter.put('/status/:id', validateDeletUserController.run.bind(validateDeletUserController));*/