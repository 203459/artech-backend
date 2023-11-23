
import { UserRepositoryImpl } from "./repositories/postgreSqlUserRepository";
const userRepositoryImpl= new UserRepositoryImpl();

import { UserCreateController } from "./controllers/userCreateController";
import {  UserCreateUseCase } from "../application/userCreateUseCase";

const addUserUseCase = new  UserCreateUseCase(userRepositoryImpl);
const userCreateController = new UserCreateController(addUserUseCase);

export {
    userCreateController,
};