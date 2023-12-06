import { Chat } from "../../domain/entities/chat";
import { ChatRepository } from "../../domain/repositories/chatRepository";
//import { compare, encrypt } from '../../../helpers/hash';
//import { tokenSigIn } from "../../../helpers/token";
import { ChatModel } from "../models/chatModel"


export class ChatRepositoryImpl implements ChatRepository {

    listAllChats(): Promise<Chat[] | null> {
        return ChatModel.findAll();
    }
       
}