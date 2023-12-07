import { Request, Response } from "express";
import { GetChatByIdUseCase } from "../../application/getChatByIdUseCase";

export class GetChatByIdController {
    constructor(
        readonly getChatByIdUseCase: GetChatByIdUseCase,
    ) { }

    async run(req: Request, res: Response) {
        try {

            const { id } = req.params;

            const chat = await this.getChatByIdUseCase.run(parseInt(id));
            
            console.log(chat)

            if (chat) {
                return res.status(200).send({
                    status: 'success',
                    data: chat,
                    message: 'chat obtenido exitosamente',
                });
            }
            return res.status(404).send({
                status: 'error',
                message: 'No se encontró al Chat',
            });
        } catch (error) {
            console.error("Error al recuperar el chat:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al recuperar el chat",
            });

        }
    }
}