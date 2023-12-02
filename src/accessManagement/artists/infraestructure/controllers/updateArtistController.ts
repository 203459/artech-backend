import { Request, Response } from "express";
import { UpdateArtistUseCase } from "../../application/updateArtistUseCase";

export class UpdateArtistController {
    constructor(readonly updateArtistUseCase: UpdateArtistUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { nickname, name, lastname, phone, art_type } = req.body;

            const updatedArtist = await this.updateArtistUseCase.run(parseInt(id),nickname,name,lastname,phone,art_type);

            if (updatedArtist) {
                return res.status(201).send({
                    status: "success",
                    message: "Artista actualizada con éxito",
                    data: updatedArtist,
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "No se encontró o no se puede actualizar la artista",
                });
            }
        } catch (error) {
            console.error("Error al actualizar la artista:", error);
            return res.status(500).send({
                status: "error",
                message: "Error al actualizar la artista: " + error,
            });
        }
    }
}
