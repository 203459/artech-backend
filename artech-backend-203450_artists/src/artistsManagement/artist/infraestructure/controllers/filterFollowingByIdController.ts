import { Request, Response } from "express";
import { FilterFollowingByIdUseCase } from "../../application/filterFollowingByIdUseCase";

export class FilterFollowingByIdController {

    constructor(readonly filterFollowingByIdUseCase: FilterFollowingByIdUseCase) { }

    async run(req: Request, res: Response) {
        try {

            const { id } = req.params;

            const artist = await this.filterFollowingByIdUseCase.run(parseInt(id));
            
            console.log(artist)

            if (artist) {
                return res.status(200).send({
                    status: 'success',
                    data: artist,
                    message: 'Seguidos obtenidos exitosamente',
                });
            }
            return res.status(404).send({
                status: 'error',
                message: 'No se encontró al artista',
            });
        } catch (error) {
            console.error("Error al recuperar los seguidos:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al recuperar al artista",
            });

        }
    }
}