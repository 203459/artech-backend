import { Chat } from "../../domain/entities/chat";
import { ChatRepository } from "../../domain/repositories/chatRepository";
//import { compare, encrypt } from '../../../helpers/hash';
//import { tokenSigIn } from "../../../helpers/token";
import { ChatModel } from "../models/chatModel"


export class ChatRepositoryImpl implements ChatRepository {

    listAllChats(): Promise<Chat[] | null> {
        return ChatModel.findAll();
    }

    getChatById(id: number): Promise<Chat | null> {
        return ChatModel.findOne({ where: { id } });
    }

    createChat(status: String, id_artist: number): Promise<Chat | null> {
        return ChatModel.create({
            status,
            id_artist,
           // createdAt
        });
    }
       
}