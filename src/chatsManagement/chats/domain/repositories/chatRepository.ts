import { Chat } from "../entities/chat";

export interface ChatRepository {

    listAllChats(): Promise<Chat[] | null>;


    /*createUser(email: String, password: String, status_delete: string,type_rolee: number): Promise<User|null>;    
    updateUserPassword(id: number, password: string): Promise<Chat | null | string>*/

}