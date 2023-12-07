import { Message } from '../domain/entities/message';
import { MessageRepository } from '../domain/repositories/messageRepository';

export class MessageCreateUseCase {

    constructor(readonly messageRepository: MessageRepository) { }

    async run(
        file: string,
        text: string,
        id_artist: number,
        
    ): Promise<Message | string | Date | number | null> {

        try {
            if (!id_artist) {
                return null;
            }

            const registerMessage = await this.messageRepository.messageCreate(file, text, id_artist);
            
            console.log(registerMessage);

            if (registerMessage === null) {
                return null;
            }

            return registerMessage;
        } catch (error) {
            console.error("Error in messageCreateUseCase:", error);
            return null;
        }
    }
}