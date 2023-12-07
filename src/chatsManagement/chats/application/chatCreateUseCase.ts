import { Chat } from '../domain/entities/chat';
import { ChatRepository } from '../domain/repositories/chatRepository';

export class ChatCreateUseCase {

    constructor(readonly chatRepository: ChatRepository) { }

    async run(
        status: string,
        id_artist: number,

    ): Promise<Chat | null | number | Error> {

       

        try {
            if (!status || !id_artist) {
                return null;
            }

            const createChat = await this.chatRepository.createChat(status, id_artist);

            if (createChat === null) {
                return null;
            }

            return createChat;
        } catch (error) {
            return null;
        }
    }
}