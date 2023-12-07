import { Request, Response } from "express";
import { ListAllMessagesUseCase } from "../../application/listAllMessagesUseCase";

export class ListAllMessagesController {
    constructor(
        readonly listAllMessagesUseCase : ListAllMessagesUseCase,
    ){}

    async run(req: Request, res: Response) {
        try {
          const messages = await this.listAllMessagesUseCase.run();
          console.log(messages)
          if (messages) {
            return res.status(200).send({
              status: 'success',
              data: messages,
              message: 'Lista de Messages obtenida exitosamente',
              
            });
          }
          return res.status(404).send({
            status: 'error',
            message: 'No se encontraron Messages',
          });
        } catch (error) {   
            console.error("Error fetching all Messages:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al recuperar Messages",
            });
      
      }
}
}