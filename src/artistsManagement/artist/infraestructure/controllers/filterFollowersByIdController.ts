import { Request, Response } from "express";
import { FilterFollowersByIdUseCase } from "../../application/filterFollowersByIdUseCase";

export class FilterFollowersByIdController {

    constructor(readonly filterFollowersByIdUseCase: FilterFollowersByIdUseCase) { }

    async run(req: Request, res: Response) {
        try {

            const { id } = req.params;

            const artist = await this.filterFollowersByIdUseCase.run(parseInt(id));
            
            console.log(artist)

            if (artist) {
                return res.status(200).send({
                    status: 'success',
                    data: artist,
                    message: 'Seguidores obtenidos exitosamente',
                });
            }
            return res.status(404).send({
                status: 'error',
                message: 'No se encontró al artista',
            });
        } catch (error) {
            console.error("Error al recuperar los seguidores:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al recuperar al artista",
            });

        }
    }
}