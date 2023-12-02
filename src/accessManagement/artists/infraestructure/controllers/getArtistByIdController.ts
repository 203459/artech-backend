import { Request, Response } from "express";
import { GetArtistByIdUseCase } from "../../application/getArtistByIdUseCase";

export class GetArtistByIdController {
    constructor(
        readonly getArtistByIdUseCase: GetArtistByIdUseCase,
    ) { }

    async run(req: Request, res: Response) {
        try {

            const { id } = req.params;

            const artist = await this.getArtistByIdUseCase.run(parseInt(id));
            
            console.log(artist)

            if (artist) {
                return res.status(200).send({
                    status: 'success',
                    data: artist,
                    message: 'Artista obtenido exitosamente',
                });
            }
            return res.status(404).send({
                status: 'error',
                message: 'No se encontró al artista',
            });
        } catch (error) {
            console.error("Error al recuperar el artista:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al recuperar el artista",
            });

        }
    }
}