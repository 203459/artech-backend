
import { UserRepositoryImpl } from "./repositories/postgreSqlUserRepository";
const userRepositoryImpl= new UserRepositoryImpl();

import { UserCreateController } from "./controllers/userCreateController";
import {  UserCreateUseCase } from "../application/userCreateUseCase";

const addUserUseCase = new  UserCreateUseCase(userRepositoryImpl);
const userCreateController = new UserCreateController(addUserUseCase);

import { LoginUserController } from "./controllers/loginUserController";
import { LoginUserUseCase } from "../application/loginUserUseCase";

const loginUserUseCase = new LoginUserUseCase(userRepositoryImpl)
const loginUserController = new LoginUserController(loginUserUseCase)

import { ListAllUsersController} from "./controllers/listAllUsersController";
import { ListAllUsersUseCase} from "../application/listAllUsersUseCase";

const listAllUsersUseCase = new ListAllUsersUseCase(userRepositoryImpl)
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase)

export {
    userCreateController,
    loginUserController,
    listAllUsersController,
};