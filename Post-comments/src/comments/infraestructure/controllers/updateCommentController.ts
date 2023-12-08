import { Request, Response } from "express";
import { UpdateCommentUseCase } from "../../application/use-cases/updateCommentUseCase";

export class UpdateCommentController {
    constructor(readonly updateCommentUseCase: UpdateCommentUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { description } = req.body;

            const updatedPost = await this.updateCommentUseCase.run(id,description);

            if (updatedPost) {
                return res.status(201).send({
                    status: "success",
                    message: "comentario actualizado con éxito",
                    data: updatedPost,
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "No se encontró o no se puede actualizar el comentario",
                });
            }
        } catch (error) {
            console.error("Error al actualizar el comentario:", error);
            return res.status(500).send({
                status: "error",
                message: "Error al actualizar el comentario: " + error,
            });
        }
    }
}