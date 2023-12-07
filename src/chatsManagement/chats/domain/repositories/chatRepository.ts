import { Chat } from "../entities/chat";

export interface ChatRepository {

    listAllChats(): Promise<Chat[] | null>;
    getChatById(id: number): Promise<Chat | number | null>;
    createChat(status: String, id_artist: number): Promise<Chat|null>;
    /*updateUserPassword(id: number, password: string): Promise<Chat | null | string>*/
}