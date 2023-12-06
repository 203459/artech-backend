import express, { Router } from 'express';
import { createRoleController, getRoleByIdController} from '../dependencies';

export const roleRouter: Router = express.Router();

roleRouter.post('/', createRoleController.run.bind(createRoleController));

roleRouter.get('/:id',getRoleByIdController.run.bind(getRoleByIdController))
