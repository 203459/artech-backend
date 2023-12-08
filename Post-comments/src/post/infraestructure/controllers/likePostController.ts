import { LikePostUseCase } from "../../application/use-cases/likePostUseCase";
import { Request, Response } from "express";
import postModel from "../model/postModel";


export class LikePostController {
    constructor(readonly likePostUseCase: LikePostUseCase) { }


    async run(req: Request, res: Response) {

        try {
            let { id } = req.params;
            const userId = req.body.userId;

            let updatedLikes;



            const post = await postModel.findById(id)

            if (post) {
                post.likes.push(userId)
                updatedLikes = await this.likePostUseCase.run(id, post.likes, post.likes.length)
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