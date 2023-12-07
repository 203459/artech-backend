import { ChatRepositoryImpl } from "./repositories/postgreSqlChatRepository";
const chatRepositoryImpl= new ChatRepositoryImpl();

import { ChatCreateController } from "./controllers/chatCreateController";
import {  ChatCreateUseCase } from "../application/chatCreateUseCase";

const chatCreateUseCase = new  ChatCreateUseCase(chatRepositoryImpl);
const chatCreateController = new ChatCreateController(chatCreateUseCase);

import { ListAllChatsController} from "./controllers/listAllChatsController";
import { ListAllChatsUseCase} from "../application/listAllChatsUseCase";

const listAllChatsUseCase = new ListAllChatsUseCase(chatRepositoryImpl)
const listAllChatsController = new ListAllChatsController(listAllChatsUseCase)

import { GetChatByIdController} from "./controllers/getChatByIdController";
import { GetChatByIdUseCase} from "../application/getChatByIdUseCase";

const getChatByIdUseCase = new GetChatByIdUseCase(chatRepositoryImpl)
const getChatByIdController = new GetChatByIdController(getChatByIdUseCase)

export { listAllChatsController, chatCreateController, getChatByIdController};