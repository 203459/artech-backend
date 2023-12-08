import { Request, Response } from "express";
import { ReadCommentUseCase } from "../../application/use-cases/readCommentUseCase";


export class ReadCommentController {
    constructor(
        readonly readCommentUseCase : ReadCommentUseCase,
    ){}

    async run(req: Request, res: Response) {
        try {
          const { id } = req.params;
          const comment = await this.readCommentUseCase.run(id);
          console.log(comment)
          if (comment) {
            return res.status(200).send({
              status: 'success',
              data: comment,
              message: 'Lista de comentarios obtenida exitosamente',
              
            });
          }
          //console.log(users)
          return res.status(404).send({
            status: 'error',
            message: 'No se encontraron comentarios',
          });
        } catch (error) {   
            console.error("Error fetching all comentarios:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al recuperar comentarios",
            });
      
      }
}
}