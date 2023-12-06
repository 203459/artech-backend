import { Request, Response } from "express";
import { ListAllChatsUseCase } from "../../application/listAllChatsUseCase";


export class ListAllChatsController {
    constructor(
        readonly listAllChatsUseCase : ListAllChatsUseCase,
    ){}

    async run(req: Request, res: Response) {
        try {
          const chats = await this.listAllChatsUseCase.run();
          console.log(chats)
          if (chats) {
            return res.status(200).send({
              status: 'success',
              data: chats,
              message: 'Lista de Chats obtenida exitosamente',
              
            });
          }
          return res.status(404).send({
            status: 'error',
            message: 'No se encontraron Chats',
          });
        } catch (error) {   
            console.error("Error fetching all Chats:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al recuperar Chats",
            });
      
      }
}
}