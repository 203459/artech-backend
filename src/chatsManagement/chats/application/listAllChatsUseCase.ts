import { Chat } from "../domain/entities/chat";
import { ChatRepository } from "../domain/repositories/chatRepository";


export class ListAllChatsUseCase {
    constructor(readonly chatRepository: ChatRepository){}

    async run(): Promise<Chat[]|null> {
        try {
        const chats = await this.chatRepository.listAllChats();
        return chats;
        } catch (error) {
            return null;
        }
    }
}