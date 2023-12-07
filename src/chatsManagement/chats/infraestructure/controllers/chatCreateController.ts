import { Request, Response } from 'express';
import { ChatCreateUseCase } from '../../application/chatCreateUseCase';

export class ChatCreateController {
    constructor(readonly chatCreateUseCase: ChatCreateUseCase) { }

    async run(req: Request, res: Response) {
        //console.log('controller');

        try {
            const {
                status,
                id_artist,
                //createdAt,
            } = req.body;


            const createChat = await this.chatCreateUseCase.run(
                status,
                id_artist,
                //createdAt,
            );
            
            console.log(createChat)
            if (createChat instanceof Error) {
                return res.status(409).send({
                    status: "error",
                    message: createChat.message
                });
            }

            if (createChat) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        createChat
                    },
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "Se registró un error inesperado mientras se registraban los datos del usuario.",
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.",
            });
        }
    }
}