import { Request, Response } from "express";
import { ListAllArtistsUseCase } from "../../application/listAllArtistsUseCase";


export class ListAllArtistsController {
    constructor(
        readonly listAllArtistUseCase : ListAllArtistsUseCase,
    ){}

    async run(req: Request, res: Response) {
        try {
          const artists = await this.listAllArtistUseCase.run();
          console.log(artists)
          if (artists) {
            return res.status(200).send({
              status: 'success',
              data: artists,
              message: 'Lista de artistas obtenida exitosamente',
            });
          }
          return res.status(404).send({
            status: 'error',
            message: 'No se encontraron artistas',
          });
        } catch (error) {   
            console.error("Error recuperando Artistas:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al recuperar los artistas",
            });
      
      }
}
}