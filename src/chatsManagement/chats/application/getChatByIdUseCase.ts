import { Chat } from "../domain/entities/chat";
import { ChatRepository } from "../domain/repositories/chatRepository";

export class GetChatByIdUseCase {
    constructor(readonly artistRepository: ChatRepository) { }

    async run(
        id: number,
        
    ): Promise<Chat | number | null | string> {
        try {
            const chat = await this.artistRepository.getChatById(id);
            return chat;
            } catch (error) {
                return null;
            }
    }
}