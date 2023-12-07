import { Message } from "../domain/entities/message";
import { MessageRepository } from "../domain/repositories/messageRepository";


export class ListAllMessagesUseCase {
    constructor(readonly messageRepository: MessageRepository){}

    async run(): Promise<Message[]|null> {
        try {
        const messages = await this.messageRepository.listAllMessages();
        return messages;
        } catch (error) {
            return null;
        }
    }
}