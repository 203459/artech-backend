import { Request, Response } from 'express';
import { MessageCreateUseCase } from '../../application/messageCreateUseCase';

export class MessageCreateController {
    constructor(readonly messageCreateUseCase: MessageCreateUseCase) { }

    async run(req: Request, res: Response) {
        console.log('controller');
        const {
            file,
            text,
            id_artist,
        } = req.body;

        try {
            
            const messageCreate = await this.messageCreateUseCase.run(
                file,
                text,
                id_artist,
            );
            
            console.log(messageCreate)

            if (messageCreate) {
                return res.status(201).send({
                    status: "success",
                    data: messageCreate,
                    message: "Mensaje creado correctamente"
                });
            } else {
                return res.status(400).send({
                    status: "error",
                    data: [],
                    message: "Se registró un error inesperado mientras se creaba el mensaje.",
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