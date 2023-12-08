import { Request, Response } from 'express';
import { CreateCommentUseCase } from '../../application/use-cases/createCommentUseCase';
import postModel from '../../../post/infraestructure/model/postModel';

export class CreateCommentController {
    constructor(readonly createCommentUseCase: CreateCommentUseCase) { }
    
    async run(req: Request, res: Response) {
        
        try {
            let post, comments
            const {
                postId,
                creatorUid,
                description,
                username,
                userProfileUrl,
                createAt,
                likes,
                totalReplays,
            } = req.body;
           

            const createComment = await this.createCommentUseCase.run(
                postId,
                creatorUid,
                description,
                username,
                userProfileUrl,
                createAt,
                likes,
                totalReplays,
            )

            /*post = await postModel.findById(postId)
            console.log(post)
            if(post){
                comments=post.totalComments+1
                console.log(comments)
                await postModel.findByIdAndUpdate(
                    postId,
                    { totalComments: comments },
                    { new: true } // Esto es opcional y devuelve el documento actualizado
                  );
              }*/
          
            if (createComment instanceof Error) {
                return res.status(409).send({
                    status: "error",
                    message: createComment.message,
                });
            }

            if (createComment) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        createComment
                    },
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "Se registró un error inesperado mientras se registraban los datos del comentario.",
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.",
            });
        }
    }
}