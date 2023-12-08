import { Request, Response } from "express";
import { ReadPostUseCase } from "../../application/use-cases/readPostUseCase";


export class ReadPostController {
    constructor(
        readonly readPostUseCase : ReadPostUseCase,
    ){}

    async run(req: Request, res: Response) {
        try {
          const posts = await this.readPostUseCase.run();
          console.log(posts)
          if (posts) {
            return res.status(200).send({
              status: 'success',
              data: posts,
              message: 'Lista de posts obtenida exitosamente',
              
            });
          }
          //console.log(users)
          return res.status(404).send({
            status: 'error',
            message: 'No se encontraron posts',
          });
        } catch (error) {   
            console.error("Error fetching all posts:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al recuperar posts",
            });
      
      }
}
}