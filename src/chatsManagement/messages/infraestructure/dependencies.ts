import { ChatRepositoryImpl } from "./repositories/postgreSqlChatRepository";
const chatRepositoryImpl= new ChatRepositoryImpl();

/* import { LoginUserController } from "./controllers/loginUserController";
import { LoginUserUseCase } from "../application/loginUserUseCase";

const loginUserUseCase = new LoginUserUseCase(chatRepositoryImpl)
const loginUserController = new LoginUserController(loginUserUseCase)

import { ChatCreateController } from "./controllers/chatCreateController";
import {  ChatCreateUseCase } from "../application/chatCreateUseCase";

const chatCreateUseCase = new  ChatCreateUseCase(chatRepositoryImpl);
const chatCreateController = new ChatCreateController(chatCreateUseCase);*/

import { ListAllChatsController} from "./controllers/listAllChatsController";
import { ListAllChatsUseCase} from "../application/listAllChatsUseCase";

const listAllChatsUseCase = new ListAllChatsUseCase(chatRepositoryImpl)
const listAllChatsController = new ListAllChatsController(listAllChatsUseCase)

/*import { UserDeleteUseCase } from '../application/userDeleteUseCase';
import { UserDeleteController } from './controllers/userDeleteController';

const userDeleteUseCase = new UserDeleteUseCase(chatRepositoryImpl);
const userDeleteController = new UserDeleteController(userDeleteUseCase);

import { UpdatePasswordController } from "./controllers/updatePasswordController";
import { UpdatePasswordUseCase } from "../application/updatePasswordUseCase";

const updatePasswordUseCase = new UpdatePasswordUseCase(chatRepositoryImpl);
const updatePasswordController = new UpdatePasswordController(updatePasswordUseCase);

import { ValidateDeletUserController } from "./controllers/validateDeletUserController";
import { ValidateDeletUserUseCase } from "../application/validateDeletUserUseCase";

const validateDeletUserUseCase = new ValidateDeletUserUseCase(chatRepositoryImpl);
const validateDeletUserController = new ValidateDeletUserController(validateDeletUserUseCase);*/

export {
    listAllChatsController,
};