import express, { Router } from 'express';
import { userCreateController} from '../dependencies';

export const userRouter: Router = express.Router();

userRouter.post('/', userCreateController.run.bind(userCreateController));