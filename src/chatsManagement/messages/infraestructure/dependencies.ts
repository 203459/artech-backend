import { MessageRepositoryImpl } from "./repositories/postgreSqlMessageRepository";
const messageRepositoryImpl= new MessageRepositoryImpl();

import { MessageCreateController } from "./controllers/messageCreateController";
import { MessageCreateUseCase } from "../application/messageCreateUseCase";

const messageCreateUseCase = new  MessageCreateUseCase(messageRepositoryImpl);
const messageCreateController = new MessageCreateController(messageCreateUseCase);

import { ListAllMessagesController} from "./controllers/listAllMessagesController";
import { ListAllMessagesUseCase} from "../application/listAllMessagesUseCase";

const listAllMessagesUseCase = new ListAllMessagesUseCase(messageRepositoryImpl)
const listAllMessagesController = new ListAllMessagesController(listAllMessagesUseCase)
export {
    messageCreateController,
    listAllMessagesController,
};