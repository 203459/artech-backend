import { Message } from "../entities/message";

export interface MessageRepository {

    listAllMessages(): Promise<Message[] | null>;

    messageCreate(file: String, text: String, id_artist: number): Promise < Message | string | number | null>;


    /*updateMessagePassword(id: number, password: string): Promise<Message | null | string>*/

}