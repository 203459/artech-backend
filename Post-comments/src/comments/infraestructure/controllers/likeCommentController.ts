import { LikeCommentUseCase } from "../../application/use-cases/likeCommentUseCase";
import { Request, Response } from "express";
import commentModel from "../model/commentModel";


export class LikeCommentController {
    constructor(readonly likeCommentUseCase: LikeCommentUseCase) { }


    async run(req: Request, res: Response) {

        try {
            let { id } = req.params;
            const userId = req.body.userId;

            let updatedLikes;



            const comment = await commentModel.findById(id)

            if (comment) {
                comment.likes.push(userId)
                updatedLikes = await this.likeCommentUseCase.run(id, comment.likes)
            }

            return res.status(201).json({
                status: "success",
                message: "like con éxito",
                data: updatedLikes,
            });


        } catch (error) {
            console.error("Error actualizando like:", error);
            return res.status(500).json({
                status: "error",
                message: "Error al actualizar el like",
            });
        }
    }
}