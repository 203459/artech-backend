import { Request, Response } from "express";
import { UpdateTotalCommetsUseCase } from "../../application/use-cases/updateTotalCommentsUseCase";

export class UpdateTotalCommentsController {
    constructor(readonly updateTotalCommetsUseCase: UpdateTotalCommetsUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { totalComments } = req.body;

            const updatedPost = await this.updateTotalCommetsUseCase.run(id,totalComments);

            if (updatedPost) {
                return res.status(201).send({
                    status: "success",
                    message: "Post actualizado con éxito",
                    data: updatedPost,
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "No se encontró o no se puede actualizar el post",
                });
            }
        } catch (error) {
            console.error("Error al actualizar el post:", error);
            return res.status(500).send({
                status: "error",
                message: "Error al actualizar el post: " + error,
            });
        }
    }
}