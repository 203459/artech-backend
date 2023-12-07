import { Message } from "../../domain/entities/message";
import { MessageRepository } from "../../domain/repositories/messageRepository";
//import { compare, encrypt } from '../../../helpers/hash';
//import { tokenSigIn } from "../../../helpers/token";
import { MessageModel } from "../models/messageModel"

export class MessageRepositoryImpl implements MessageRepository {

    messageCreate(file: string, text: string, id_artist: number): Promise<Message | string | number | null> {
        return MessageModel.create({
            file,
            text,
            id_artist
        });
    }

    listAllMessages(): Promise<Message[] | null> {
        return MessageModel.findAll();
    }
       
}